import React, { useState } from "react";
import "./style.css";
import ChatForm from "./chatForm";
import Message from "./message";
import { BsXLg, BsChevronDoubleUp, BsHeartFill, BsHeart } from "react-icons/bs";
import { Label, Transition } from "semantic-ui-react";
export default function ChatBox({
  handleSend,
  handleChange,
  handlelike,
  handleClick,
  msgs,
  inputValue,
  text,
  typing,
}) {
  const [show, setShow] = useState(true);
  const [seen, setSeen] = useState(msgs.filter((x) => !x.seen).length);

  const handleToggle = () => {
    if (show) {
      setShow(false);
      msgs = msgs.map((obj) => {
        return { ...obj, seen: true };
      });
    } else {
      setShow(true);
      setSeen(msgs.filter((x) => !x.seen).length);
    }
  };
  return (
    <div
      style={{
        display: "inline-block",
        width: "500px",
        height: "600px",
        verticalAlign: "-webkit-baseline-middle",
      }}
    >
      <Transition visible={show} animation="scale" duration={500}>
        <div className="chatBox-container">
          {typing && <span className="typing">typing ... </span>}
          <div className="chat-box">
            {msgs.map((msg) => (
              <div className="row" key={msg.id}>
                <div className="col-10" onClick={() => handleClick(msg.id)}>
                  <Message
                    id={msg.id}
                    text={msg.text}
                    sendby={msg.sendby}
                    dt={msg.dt}
                  ></Message>
                </div>

                {msg.like ? (
                  <div
                    className="col-2"
                    onClick={() => handlelike(false, msg.id)}
                  >
                    <BsHeartFill />
                  </div>
                ) : (
                  <div
                    className="col-2"
                    onClick={() => handlelike(true, msg.id)}
                  >
                    <BsHeart />
                  </div>
                )}
              </div>
            ))}
          </div>
          <ChatForm
            text={text}
            inputValue={inputValue}
            handleSend={handleSend}
            handleChange={handleChange}
          />
        </div>
      </Transition>
      <Transition visible={!show} animation="scale" duration={500}>
        <Label
          style={{ position: "fixed", bottom: "80px" }}
          color="red"
          circular
        >
          {seen}
        </Label>
      </Transition>
      <button
        style={{ position: "fixed", bottom: "10px" }}
        onClick={handleToggle}
        className={show ? "bt-close" : "bt-open"}
      >
        {show ? <BsXLg /> : <BsChevronDoubleUp />}
      </button>
    </div>
  );
}

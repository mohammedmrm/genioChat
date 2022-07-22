import React, { useState } from "react";
import "./style.css";
import ChatForm from "./chatForm";
import Message from "./message";
import { BsXLg, BsChevronDoubleUp, BsHeartFill, BsHeart } from "react-icons/bs";
import { Popup, Label, Transition } from "semantic-ui-react";
export default function ChatBox({
  handleSend,
  handleChange,
  handlelike,
  handleClick,
  handleSeen,
  msgs,
  inputValue,
  text,
  typing,
}) {
  const [show, setShow] = useState(true);
  const [Pop, setPop] = useState(false);
  const [seen, setSeen] = useState(msgs.filter((x) => !x.seen).length);
  var newMsgs = msgs;
  const handleToggle = () => {
    console.log("unseen messsages: ", msgs.filter((x) => !x.seen).length);
    if (show) {
      setShow(false);
      newMsgs = msgs.map((obj) => {
        return { ...obj, seen: true };
      });
      setSeen(msgs.filter((x) => !x.seen).length);
    } else {
      setShow(true);
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
          {typing && <Label pointing="left">Peer is typing ...</Label>}
          <div className="chat-box">
            {msgs.map((msg) => (
              <div
                className={
                  msg.sendby === "p"
                    ? "row chat-msg chat-reverse"
                    : "row chat-msg"
                }
                key={msg.id}
              >
                <div
                  onMouseOver={(Pop) => setPop(true)}
                  onMouseLeave={(Pop) => setPop(false)}
                  className="col-10"
                  onClick={() => handleClick(msg.id)}
                >
                  <Popup
                    style={{ position: "relative" }}
                    open={Pop}
                    position="top left"
                    trigger={
                      <Message
                        id={msg.id}
                        text={msg.text}
                        sendby={msg.sendby}
                        dt={msg.dt}
                      ></Message>
                    }
                  >
                    <Popup.Header>User Rating</Popup.Header>
                    <Popup.Content>
                      <span >Some content</span>
                    </Popup.Content>
                  </Popup>
                </div>

                {msg.like ? (
                  <div
                    className="col-2 chat-like"
                    onClick={() => handlelike(false, msg.id)}
                  >
                    <BsHeartFill />
                  </div>
                ) : (
                  <div
                    className="col-2 chat-like"
                    
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
        onClick={() => {
          handleSeen(newMsgs);
          handleToggle();
        }}
        className={show ? "bt-close" : "bt-open"}
      >
        {show ? <BsXLg /> : <BsChevronDoubleUp />}
      </button>
    </div>
  );
}

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
  onEmojiClick,
  msgs,
  inputValue,
  text,
  typing,
  unseen,
}) {
  const [show, setShow] = useState(true);
  const [seen, setSeen] = useState(unseen);
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
          {typing && (
            <Label style={{ position: "absolute" }}>Peer is typing ...</Label>
          )}
          <div className="chat-box">
            {msgs.map((msg) => (
              <div
                className={
                  msg.sendby === "p" ? " chat-msg chat-reverse" : " chat-msg"
                }
                key={msg.id}
              >
                <div className="col-10">
                  <Message
                    handlelike={handlelike}
                    handleClick={handleClick}
                    id={msg.id}
                    text={msg.text + msg.like}
                    sendby={msg.sendby}
                    dt={msg.dt}
                  ></Message>
                </div>
              </div>
            ))}
          </div>
          <ChatForm
            text={text}
            inputValue={inputValue}
            handleSend={handleSend}
            onEmojiClick={onEmojiClick}
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
          {unseen}
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

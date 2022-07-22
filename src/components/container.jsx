import React, { useState, useEffect } from "react";
import ChatBox from "./chatBox";
import { Transition } from "semantic-ui-react";
const Container = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  var [msgs1, setMsgs1] = useState([]);
  var [msgs2, setMsgs2] = useState([]);
  const [typing1, setTyping1] = useState(false);
  const [typing2, setTyping2] = useState(false);
  const handleSend = (e, id) => {
    if (id === 1) {
      const id = Date.now();
      const text = text1;
      const Selfmsgobj = {
        text: text,
        dt: formatDate(new Date()),
        id: id,
        sendby: "p",
        seen: true,
        like: "",
      };
      setTyping1(false);
      setMsgs1([...msgs1, Selfmsgobj]);
      const msgobj = {
        text: text,
        dt: formatDate(new Date()),
        id: id,
        sendby: "s",
        seen: false,
        like: "",
      };
      setTyping2(false);
      setMsgs2([...msgs2, msgobj]);
      console.log("msg2: ", msgs2);
      setText1("");
    } else {
      const id = Date.now();
      const text = text2;
      const Selfmsgobj2 = {
        text: text,
        dt: formatDate(new Date()),
        id: id,
        sendby: "p",
        seen: true,
        like: "",
      };
      setMsgs2([...msgs2, Selfmsgobj2]);
      setTyping1(false);
      console.log(text2, "user send message");

      const msgobj = {
        text: text,
        dt: formatDate(new Date()),
        id: id,
        sendby: "s",
        seen: false,
        like: "",
      };
      setMsgs1([...msgs1, msgobj]);
      console.log("msg1:", msgs1);
      setText2("");
    }
  };
  const handleChange = (e, id) => {
    console.log(e, "user  Typing ...");
    if (id === 1) {
      setText1(e.target.value);
    } else {
      setText2(e.target.value);
    }

    if (id === 1) {
      setTyping2(true);
      setTimeout(() => {
        setTyping2(false);
      }, 10000);
    } else {
      setTyping1(true);
      setTimeout(() => {
        setTyping1(false);
      }, 10000);
    }
  };
  const handleSeen = (msgs) => {
    console.log(msgs);
  };
  const handleClick = (id) => {
    console.log("Message to be deleted", id);
    if (window.confirm("Delete this message?")) {
      let objIndex = msgs1.findIndex((obj) => obj.id === id);
      msgs1[objIndex].text = "Message Deleted";
      setMsgs1(msgs1);

      let objIndex2 = msgs2.findIndex((obj) => obj.id === id);
      msgs2[objIndex2].text = "Message Deleted";
      setMsgs2(msgs2);
    }
  };
  const onEmojiClick = (emoji, id) => {
    console.log(emoji.target.innerText, id);
    id === 1
      ? setText1(text1 + emoji.target.innerText)
      : setText2(text2 + emoji.target.innerText);
  };
  const handlelike = (id, emoji) => {
    console.log(emoji, id);
    let objIndex = msgs1.findIndex((obj) => obj.id === id);
    msgs1[objIndex].like = emoji;
    setMsgs1(msgs1);

    let objIndex2 = msgs2.findIndex((obj) => obj.id === id);
    msgs2[objIndex2].like = emoji;
    setMsgs2(msgs2);
  };
  return (
    <div className="chat-container">
      <h2>Chat container</h2>
      <ChatBox
        typing={typing1}
        text={text1}
        handleSeen={handleSeen}
        handleClick={handleClick}
        onEmojiClick={(emoji) => onEmojiClick(emoji, 1)}
        handlelike={handlelike}
        handleSend={(event) => handleSend(event, 1)}
        handleChange={(event) => handleChange(event, 1)}
        msgs={msgs1}
      />
      <ChatBox
        typing={typing2}
        text={text2}
        handleClick={handleClick}
        onEmojiClick={(emoji) => onEmojiClick(emoji, 2)}
        handlelike={handlelike}
        handleSeen={handleSeen}
        handleSend={(event) => handleSend(event, 2)}
        handleChange={(event) => handleChange(event, 2)}
        msgs={msgs2}
      />
    </div>
  );
};
function alredyNotTyping(msgs) {
  var x = true;
  msgs.find((msg) => {
    x = msg.id === "x" ? false : true;
    console.log("alredyNotTyping ", x);
  });
  return x;
}

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function formatDate(date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-") +
    " " +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(":")
  );
}
export default Container;

import React, { useState, useEffect } from "react";
import ChatBox from "./chatBox";
import { Transition } from "semantic-ui-react";
const Container = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  var [msgs1, setMsgs1] = useState([]);
  var [msgs2, setMsgs2] = useState([]);
  var [unseen1, setUnseen1] = useState(0);
  var [unseen2, setUnseen2] = useState(0);
  const [typing1, setTyping1] = useState(false);
  const [typing2, setTyping2] = useState(false);
  useEffect(() => {
    setUnseen1(
      msgs1.filter((x) => {
        console.log("in callback ", msgs1);
        return !x.seen;
      }).length
    );
    setUnseen2(
      msgs2.filter((x) => {
        console.log("in callback ", msgs2);
        return !x.seen;
      }).length
    );
  }, [msgs1, msgs2]);
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
      console.log("msg1:*", msgs1);
      setText2("");
    }

    console.log("Unseen for parent1", unseen2);
    console.log("Unseen for parent2", unseen1);
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
  const handleSeen = (id) => {
    console.log("set messages seen ", id);
    if (id == 1) {
      msgs1 = msgs1.map((obj) => {
        return { ...obj, seen: true };
      });
      setMsgs1(msgs1);
      setUnseen1(0);
    } else {
      msgs2 = msgs2.map((obj) => {
        return { ...obj, seen: true };
      });
      setMsgs2(msgs2);
      setUnseen2(0);
    }
  };
  const handleClick = (id) => {
    console.log("Message to be deleted", id);
    if (window.confirm("Delete this message?")) {
      let objIndex = msgs1.findIndex((obj) => obj.id === id);
      msgs1[objIndex].text = "<span class='deleted'>Message Deleted</span>";
      msgs1[objIndex].like = "";
      setMsgs1(msgs1);

      let objIndex2 = msgs2.findIndex((obj) => obj.id === id);
      msgs2[objIndex2].text = "<span class='deleted'>Message Deleted</span>";
      msgs2[objIndex2].like = "";
      setMsgs2(msgs2);
      setTyping1(true);
      setTimeout(() => {
        setTyping1(false);
      }, 10);
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
    msgs1[objIndex].like = "<span class='reaction'>" + emoji + "</h1>";

    let objIndex2 = msgs2.findIndex((obj) => obj.id === id);
    msgs2[objIndex2].like = "<span class='reaction'>" + emoji + "</h1>";
    console.log("update messages for Reaction: ", msgs1, msgs2);
    setMsgs1(msgs1);
    setMsgs2(msgs2);
    //this because react does not re-render if we did not change refrence, we here changed only the value
    setTyping1(true);
    setTimeout(() => {
      setTyping1(false);
    }, 10);
  };
  return (
    <div className="chat-container">
      <h2>Chat container</h2>
      <ChatBox
        unseen={unseen1}
        typing={typing1}
        text={text1}
        handleSeen={() => handleSeen(1)}
        handleClick={handleClick}
        onEmojiClick={(emoji) => onEmojiClick(emoji, 1)}
        handlelike={handlelike}
        handleSend={(event) => handleSend(event, 1)}
        handleChange={(event) => handleChange(event, 1)}
        msgs={msgs1}
      />
      <ChatBox
        unseen={unseen2}
        typing={typing2}
        text={text2}
        handleClick={handleClick}
        onEmojiClick={(emoji) => onEmojiClick(emoji, 2)}
        handlelike={handlelike}
        handleSeen={() => handleSeen(2)}
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

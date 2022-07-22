import React, { useState } from "react";
import {
  BsChevronDoubleUp,
  BsFillEmojiSmileFill,
  BsZoomIn,
} from "react-icons/bs";
import Picker from "emoji-picker-react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
const ChatForm = ({ handleChange, handleSend, text }) => {
  var [show, setShow] = useState(false);
  var [chosenEmoji, setChosenEmoji] = useState(null);
  const showEmoj = () => {
    console.log(show, "show emojs");
    show = show ? false : true;
    setShow(show);
  };
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <div className="chat-form-container">
      <div className="chat-form">
        <div className="publisher bt-1 border-light">
          <input
            className="publisher-input"
            type="text"
            value={text}
            placeholder="Write something"
            onChange={handleChange}
          />
          {show && (
            <Picker
              onEmojiClick={showEmoj}
              pickerStyle={{
                width: "320px",
                height: "300px",
                position: "absolute",
                top: "-300px",
              }}
              native
              //onEmojiClick={onEmojiClick}
              groupNames={{
                smileys_people: "yellow faces",
                animals_nature: "cute dogs and also trees",
                food_drink: "milkshakes and more",
                travel_places: "I love trains",
                activities: "lets play a game",
                objects: "stuff",
                symbols: "more stuff",
                flags: "fun with flags",
                recently_used: "did I really use those?!",
              }}
            />
          )}
          <a className="publisher-btn" href="#" onClick={showEmoj}>
            <BsFillEmojiSmileFill></BsFillEmojiSmileFill>
          </a>
          <a
            className="publisher-btn text-info"
            href="#"
            onClick={() => {
              text !== "" ? handleSend() : console.log("No");
              setShow(false);
            }}
          >
            <BsChevronDoubleUp></BsChevronDoubleUp>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChatForm;

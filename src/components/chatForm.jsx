import React, { useState } from "react";
import {
  BsChevronDoubleUp,
  BsFillEmojiSmileFill,
  BsZoomIn,
} from "react-icons/bs";
import { Popup } from "semantic-ui-react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
const ChatForm = ({ handleChange, handleSend, text, onEmojiClick }) => {
  const handleKeyUp = (e) => {
    if (e.key == "Enter") {
      handleSend();
    }
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
            onKeyUp={handleKeyUp}
          />
          <div style={{ width: "200px" }}>
            <Popup
              hoverable
              size="small"
              position={"top center"}
              trigger={
                <a className="publisher-btn" href="#">
                  <BsFillEmojiSmileFill></BsFillEmojiSmileFill>
                </a>
              }
            >
              <Popup.Content>
                <div className="emoji" onClick={onEmojiClick}>
                  😀
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😃
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😄
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😁
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😆
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😅
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😂
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🤣
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😊
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😇
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🙂
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🙃
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😉
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😌
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😍
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🥰
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😘
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😗
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😙
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😚
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😋
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😛
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😝
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😜
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🤪
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🤨
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🧐
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🤓
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😎
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🤩
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🥳
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😏
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😒
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😞
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😔
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😟
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😕
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🙁
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  ☹️
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😣
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😖
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😫
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😩
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🥺
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😢
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😭
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😤
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😠
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😡
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🤬
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🤯
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😳
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🥵
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🥶
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😱
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😨
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😰
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😥
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😓
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🤗
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🤔
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🤭
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🤫
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🤥
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😶
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😐
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😑
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😬
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🙄
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😯
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😦
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😧
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😮
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😲
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🥱
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😴
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🤤
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😪
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😵
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🤐
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🥴
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🤢
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🤮
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🤧
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😷
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🤒
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🤕
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🤑
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🤠
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😈
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  👿
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  👹
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  👺
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🤡
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  💩
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  👻
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  💀
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  ☠️
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  👽
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  👾
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🤖
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🎃
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😺
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😸
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😹
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😻
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😼
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😽
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  🙀
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😿
                </div>
                <div className="emoji" onClick={onEmojiClick}>
                  😾{" "}
                </div>
              </Popup.Content>
            </Popup>
          </div>
          <a
            className="publisher-btn text-info"
            href="#"
            onClick={() => {
              text !== "" ? handleSend() : console.log("No");
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

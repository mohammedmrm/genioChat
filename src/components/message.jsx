import React from "react";
import { Message as Msg } from "semantic-ui-react";
const Message = ({ text, dt, sendby, id }) => {
  const onClick = (e, id) => {
    console.log(e, id);
  };
  return (
    <div
      className={
        sendby === "s"
          ? "media media-chat media-chat-reverse"
          : "media media-chat media-chat-normal"
      }
    >
      <div className="media-body">
        <p>{text}</p>
        <p className="meta">
          <time>{dt}</time>
        </p>
      </div>
    </div>
  );
};

export default Message;

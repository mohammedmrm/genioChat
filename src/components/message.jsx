import React from "react";
import { Dropdown, Button, Icon } from "semantic-ui-react";
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
        <Dropdown text={text} Icon="">
          <Dropdown.Menu>
            <Dropdown.Item text="Delete" />
          </Dropdown.Menu>
        </Dropdown>
        <p className="meta">
          <time>{dt}</time>
        </p>
      </div>
    </div>
  );
};

export default Message;

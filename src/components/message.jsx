import React from "react";
import { Popup } from "semantic-ui-react";
import Moment from "react-moment";
import parse from "html-react-parser";
const Message = ({ text, dt, sendby, id, handlelike, handleClick }) => {
  //const [Pop, setPop] = useState(false);
  return (
    <div
      className={
        sendby === "s"
          ? "media media-chat media-chat-reverse"
          : "media media-chat media-chat-normal"
      }
    >
      <div className="media-body">
        <Popup
          flowing
          hoverable
          position={sendby === "p" ? "left center" : "right center"}
          trigger={<p onDoubleClick={() => handleClick(id)}>{parse(text)}</p>}
        >
          {sendby === "s" && (
            <Popup.Content>
              <div className="emoji" onClick={() => handlelike(id, "👍")}>
                👍
              </div>
              <div className="emoji" onClick={() => handlelike(id, "😀")}>
                😀
              </div>
              <div className="emoji" onClick={() => handlelike(id, "😏")}>
                😏
              </div>
              <div className="emoji" onClick={() => handlelike(id, "😍")}>
                😍
              </div>
              <div className="emoji" onClick={() => handlelike(id, "😡")}>
                😡
              </div>
            </Popup.Content>
          )}
        </Popup>
        <p className="meta">
          <time>
            <Moment interval={30000} fromNow>
              {dt}
            </Moment>
          </time>
        </p>
      </div>
    </div>
  );
};

export default Message;

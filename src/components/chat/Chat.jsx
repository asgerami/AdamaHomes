import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="/profile.png"
            alt=""
          />
          <span>Abebe B</span>
          <p>A Test Message...</p>
        </div>
        <div className="message">
          <img
            src="/profile.png"
            alt=""
          />
          <span>Abebe B</span>
          <p>A Test Message...</p>
        </div>
        <div className="message">
          <img
            src="/profile.png"
            alt=""
          />
          <span>Abebe B</span>
          <p>A Test Message...</p>
        </div>
        <div className="message">
          <img
            src="/profile.png"
            alt=""
          />
          <span>Abebe B</span>
          <p>A Test Message...</p>
        </div>
        <div className="message">
          <img
            src="/profile.png"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="/profile.png"
                alt=""
              />
              Abebe B
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Hello</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Hi</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Test 1</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Test 2</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Test 3</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Test 4</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Adama Homes</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Buy and Sell Homes</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Final chat test</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Test Test Test</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;

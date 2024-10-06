import React, { useState } from 'react';
import './chatList.css';

function ChatList() {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="Search" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt="Add"
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>

      {/* Chat items */}
      <div className="item">
        <div className="user">
          <img src="./avatar.png" alt="User Avatar" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>
       
      </div>

      {/* Repeat for other items */}
      <div className="item">
        <div className="user">
          <img src="./avatar.png" alt="User Avatar" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default ChatList;

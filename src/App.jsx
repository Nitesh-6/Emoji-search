import "./App.css";

import React, { useState } from "react";
import emojiData from "./Emoji.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredEmojis = emojiData.filter((emoji) =>
    emoji.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Emoji Search</h1>
      <input
        type="text"
        placeholder="Search emojis"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <div className="emojiList">
        {filteredEmojis.length > 0 ? (
          filteredEmojis.map((emoji) => (
            <div key={emoji.codes} className="emoji">
              <span className="emojiChar">{emoji.char}</span>
              <span className="emojiName">{emoji.name}</span>
            </div>
          ))
        ) : (
          <p>No emojis found</p>
        )}
      </div>
    </div>
  );
}

export default App;

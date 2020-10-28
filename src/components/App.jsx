import React from "react";
import emojipedia from "../emojipedia";
import Term from "./Term";

function listAllEmoji(emoji) {
  return (
    <Term
      key={emoji.id}
      name={emoji.name}
      emoji={emoji.emoji}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(listAllEmoji)}</dl>
    </div>
  );
}

export default App;

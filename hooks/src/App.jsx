import React, { useState, createContext } from "react";
import "./App.css";
import UseContext from '../src/components/UseContext';

export const ToggleTheme = createContext();

function App() {
  const colors = ["black",  "grey"];
  const [themeIndex, setThemeIndex] = useState(0);
  const [state, setState] = useState(true);
  const [likeCount, setLikeCount] = useState(0);
  const [contentMessage, setContentMessage] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % colors.length);
    setState(!state);
    setExpanded(false); 
  };

  const handleLike = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };

  const handleContent = () => {
    alert("Content Button Clicked");

    if (expanded) {
      setContentMessage("");
      setExpanded(false);
    } else {
      setContentMessage(
        `The hippopotamus, native to sub-Saharan Africa, is a large herbivorous mammal known for its formidable size, aggressive nature, and semi-aquatic lifestyle. With a barrel-shaped body, short legs, and massive head, hippos are expert swimmers, herbivores, and exhibit territorial behavior. Despite their seemingly docile appearance, they are considered one of Africa's most dangerous animals.`
      );
      setExpanded(true);
    }
  };

  return (
    <ToggleTheme.Provider value={state}>
      <div id="toggle" onClick={handleToggle}>
        <button>Toggle</button>
      </div>

      <div
        className={`content ${state ? "plain" : "blur"} ${expanded ? "expanded" : ""}`}
        id="change"
        style={{ backgroundColor: colors[themeIndex] }}
      >
        <UseContext handleLike={handleLike} />
        <div id="message">{contentMessage}</div>
        <button onClick={handleContent}>Content</button>
        <div id="number">{likeCount}</div>
        <button onClick={handleLike}>Like</button>
      </div>
    </ToggleTheme.Provider>
  );
}

export default App;
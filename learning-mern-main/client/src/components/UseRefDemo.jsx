import React, { useRef, useState } from "react";

const UseRefDemo = () => {

  const inputRef = useRef(null);

  const renderCount = useRef(0);

  const [text, setText] = useState("");

  renderCount.current += 1;

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>useRef Hook Demo</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "10px",
          marginRight: "10px",
        }}
      />

      <button onClick={focusInput}>
        Focus Input
      </button>

      <h3>Typed Text: {text}</h3>

      <h3>Render Count: {renderCount.current}</h3>

    </div>
  );
};

export default UseRefDemo;
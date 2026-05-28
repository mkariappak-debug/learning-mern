import React, { useState, useMemo } from "react";

function UseMemoExample() {

  const [number, setNumber] = useState(1);

  const squareNumber = useMemo(() => {
    console.log("Calculating Square...");
    return number * number;
  }, [number]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <h1>useMemo Example</h1>

      <h2>Number: {number}</h2>

      <h2>Square: {squareNumber}</h2>

      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>

    </div>
  );
}

export default UseMemoExample;
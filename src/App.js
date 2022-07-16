import React, { useState } from "react";
import "./App.css";
import multiplicar from "./multiplicar";

function App() {
  const [res, setRes] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleMultiplicar = () => {
    setRes(multiplicar(num1, num2));
  };

  return (
    <div className="App">
      <h1>Multiplicación</h1>
      <input
        placeholder="Numero 1"
        onChange={(e) => setNum1(e.target.value)}
        type="text"
      />
      <input
        placeholder="Numero 2"
        onChange={(e) => setNum2(e.target.value)}
        type="text"
      />
      <h1>{res}</h1>
      <button onClick={handleMultiplicar}>Multiplicar</button>
    </div>
  );
}

export default App;

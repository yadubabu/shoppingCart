import "./styles.css";
import { useState } from "react";

export default function App() {
  const [item1, setItem1] = useState({ opacity: 1 });
  const [item2, setItem2] = useState({ opacity: 1 });
  const toggle = (id) => {
    if (id == parseInt(1)) {
      setItem1({ opacity: 0.5 });
      setItem2({ opacity: 1 });
    } else if (id == parseInt(2)) {
      setItem2({ opacity: 0.5 });
      setItem1({ opacity: 1 });
    }
  };
  return (
    <div className="App">
      <button id="1" onClick={(e) => toggle(e.target.id)} style={item1}>
        Item1
      </button>
      <button id="2" onClick={(e) => toggle(e.target.id)} style={item2}>
        Item2
      </button>
    </div>
  );
}

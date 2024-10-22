import "./App.css";
import { useState } from "react";

function Key({ label, clickHandler, className }) {
  return (
    <button onClick={clickHandler} className={className}>
      {label}
    </button>
  );
}

function Display({ display }) {
  return <div className="Display">{display}</div>;
}

function App() {
  const [disp, setDisp] = useState("10 Things That Require Zero Talent");
  
  const handleKeyClick = (value) => {
    const messages = {
      1: "Being On Time",
      2: "Making An Effort",
      3: "Being High Energy",
      4: "Having A Positive Attitude",
      5: "Being Passionate",
      6: "Using Good Body Language",
      7: "Being Coachable",
      8: "Doing A Little Extra",
      9: "Being Prepared",
      0: "Having A Strong Work Ethic",
      RESET: "10 Things That Require Zero Talent",
      NAME: "CHRISTIAN DEAN M. PERALTA"
    };

    setDisp(messages[value]);
  };

  return (
    <div className="App">
      <h1>CHRISTIAN DEAN M. PERALTA - IT3A</h1>
      <div className="CalcContainer">
        <div className="DispContainer">
          <Display display={disp} />
        </div>
        <div className="ButtonsContainer">
          {Object.keys({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 0: '' }).map(num => (
            <Key key={num} label={num} clickHandler={() => handleKeyClick(num)} />
          ))}
          <Key label={"RESET"} clickHandler={() => handleKeyClick("RESET")} className="clear-button" />
        </div>
        <Key label={"NAME"} clickHandler={() => handleKeyClick("NAME")} className="PeraltaButton" />
      </div>
    </div>
  );
}

export default App;

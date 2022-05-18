import { useState } from "react";
import "./Diameter.css";
import Greeting from "./Greeting";

// export default function Diameter(){
//     const [diameter, setDiameter] = useState(25);
//     const styles = {
//         width: diameter + "px",
//         height: diameter + "px",
//         background: "red"
//     }
//     return (
//         <div className="Shape">
//             <form action="">
//                 <input type="number" value={diameter} name="" id="Diameter" onChange={(e) => setDiameter(e.target.valueAsNumber)}/>
//                 <label htmlFor="Diameter">Diameter</label>
//                 <input type="checkbox" name="" id="isCircle"  checked={isChecked} onClick={() => setIsChecked(!isChecked)}/>
//                 <label htmlFor="isCircle">Is Circle?</label>
//             </form>
//             <div className="Thingy" style={styles}></div>
//         </div>
//     );
// }

export default function Diameter() {
  const [diameter, setDiameter] = useState(180);
  const [isCircle, setIsCircle] = useState(false);
  let myName = "Amber";
  let myColor = "blue";
  let myAge = 45;

  function updateDiameter(e: any) {
    setDiameter(e.target.value);
  }

  function updateIsCircle(e: any) {
    setIsCircle(e.target.checked);
  }

  const styles = {
    width: diameter + "px",
    height: diameter + "px",
  };
  function gatorade() {
    console.log("string");
  }
  return (
    <div>
      <h1>Hi</h1>
      <Greeting myName={myName} myColor={myColor} myAge={myAge} />
      <input type="number" value={diameter} onChange={updateDiameter} />
      Diameter
      <label>
        <input
          className="checkbox"
          type="checkbox"
          checked={isCircle}
          onChange={updateIsCircle}
        />
        IsCircle
      </label>
      <div
        className={isCircle ? "object circle" : "object"}
        style={styles}
      ></div>
      <button onClick={gatorade}>Button</button>
    </div>
  );
}

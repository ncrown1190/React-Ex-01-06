import { useState } from "react";
import "./Switch.css";
export default function Switch() {
  const [isOn, setIsOn] = useState("On");
  return (
    <div className={isOn === "On" ? "Switch On" : "Switch"}>
      <div>
        <h3>Switch</h3>
        <p>{isOn}</p>
        <div>
          {isOn === "Off" ? (
            <button
              onClick={() => {
                setIsOn("On");
              }}
            >
              Turn On
            </button>
          ) : (
            <button
              onClick={() => {
                setIsOn("Off");
              }}
            >
              Turn Off
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

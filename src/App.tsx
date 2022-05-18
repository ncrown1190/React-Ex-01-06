import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Switch from "./Switch";
import PetInfo from "./PetInfo";
import UpDownCounter from "./UpDownCounter";
import Diameter from "./Diameter";
import ArraysEx from "./ArraysEx";
import { WeatherForecast } from "./WeatherForecast";
import { Quotes } from "./Quotes";

function App() {
  return (
    <div className="App">
      <Switch />
      <Switch />
      <PetInfo />
      <UpDownCounter />
      {/* <UpDownCounter />
      <UpDownCounter /> */}
      <Diameter />
      <ArraysEx />
      <WeatherForecast />
      <Quotes />
    </div>
  );
}

export default App;

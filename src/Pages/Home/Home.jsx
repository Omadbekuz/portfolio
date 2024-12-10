import React from "react";
import Image from "./New Project.png";
import "./Home.css";
import VisitorCounter from "../../components/VisitorCounter";

export default function Home() {
  return (
    <div id="Home">
      <div id="Homeleft">
        <h1>Omadbek</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, libero?
          Alias beatae excepturi quas ipsum odio tempora in voluptas laboriosam,
          tenetur quidem dolore consequatur provident!
        </p>
        <button id="letsgoBtn">Let's gets started {">"}</button>
        <VisitorCounter />
      </div>
      <div id="Homeright">
        <img src={Image} alt="sdas" />
      </div>
    </div>
  );
}

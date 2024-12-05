import React from "react";
import "./Aboutme.css";
import Image from "../Home/New Project.png";

const data = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/Omadbekuz",
  },

  {
    id: 2,
    name: "Instagram",
    link: "https://www.instagram.com/omadbek_live/",
  },
  {
    id: 3,
    name: "Telegram",
    link: "https://t.me/Omadbek_live",
  },
  {
    id: 4,
    name: "YouTube",
    link: "https://www.youtube.com/@MONSTERYTPUBGM",
  },
  {
    id: 5,
    name: "Threads",
    link: "https://www.threads.net/@omadbek_live",
  },
];

export default function Aboutme() {
  return (
    <>
      <div id="Abutme">
        <div id="IconUO">
          <img src={Image} alt="sdas" />
        </div>
        {data.map((item) => {
          return (
            <div key={item.id} id="Card">
              <h1>{item.name}</h1>
              <button
                id="LinkBtn"
                onClick={() => window.open(item.link, "_blank")}
              >
                {"Kirish uchun bosing"}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

import React from "react";
import "./Myprojects.css";

const portfoliodata = [
  {
    id: 1,
    name: "Superhero",
    tavsif: "O'z qahramoningiz haqida biliib oling😘",
    img: "https://toping.uz/storage/articles_sm/5301/4EM5K1VMYl3bPUwJPEnUP6luCVtbX98n.webp",
    link: "https://superhero-uo.netlify.app/",
  },
];

export default function Myprojects() {
  return (
    <>
      <div id="Myprojects">
        <h1>My Projects</h1>
        {portfoliodata.map((item) => {
          return (
            <div id="PortfolioCard" key={item.id}>
              <img src={item.img} alt={item.name} />
              <h1>{item.name}</h1>
              <p>{item.tavsif}</p>
              <button
                id="LinkBtn2"
                onClick={() => window.open(item.link, "_blank")}
              >
                Saytga kirish
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

import React from "react";
import "./Myprojects.css";
import furnitureimg from "./Screenshot 2025-05-15 234554.png";
import RonaldoImg from "./image.png";
import HtmlRegister from "./image copy.png";
import Promt from "./image copy 2.png";
const portfoliodata = [
  {
    id: 1,
    name: "Superhero",
    tavsif: "Learn about your hero😘",
    img: "https://toping.uz/storage/articles_sm/5301/4EM5K1VMYl3bPUwJPEnUP6luCVtbX98n.webp",
    link: "https://superhero-uo.netlify.app/",
  },
  {
    id: 2,
    name: "furniture shop",
    tavsif: "Furniture store 🛒",
    img: furnitureimg,
    link: "https://furniture-byuo.netlify.app/",
  },
  {
    id: 3,
    name: "Ronaldo web-site",
    tavsif: "Ronaldoning web-saytti",
    img: RonaldoImg,
    link: "https://ronaldosite-byou.netlify.app/",
  },
  {
    id: 4,
    name: "HTML REGISTER",
    tavsif: "HTML registration form",
    img: HtmlRegister,
    link: "https://register-html.netlify.app/",
  },
  {
    id: 5,
    name: "REACT JS DESER AI PROMPT",
    tavsif: "AI PROMPS",
    img: Promt,
    link: "https://deseraipromt-byuo.netlify.app/",
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
                Enter
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

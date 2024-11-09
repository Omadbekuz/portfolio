import React from "react";
import img1 from "../Images/id1.png";
import img2 from "../Images/id2.png";
import img3 from "../Images/id3.png";
import "./Aboutme.css";

export const Datame = [
  {
    id: 1,
    workname: "Html&Css",
    text: "Html&Css dasturlashdagi eng oson va birinchi organiladiga dasturlash tilidr, Men bu dasturlash tilini organganimda uncha qiynalmagan man va juda qiziqganim uchun tez ozlash tirib olganman",
    btncolor: "orange",
    img: img1,
  },

  {
    id: 2,
    workname: "Javascript",
    text: "Dasturlashning bu bosqichi html&Css ga nisbatan qiyinroq va ancha boshni qotiradi, chunki javascriptda asosan funcksiyalar bilan ishlash orgatiladi.Men j=Javascriptni organishda qiynalganman ba 2marta oqishimga toig'ri kelgan, men bundan afsuslanmayman chunkijavascriptni yaxshilab organilmasa qolgan dasturlash tilini organgani ancha qiyin boladi.",
    btncolor: "blue",
    img: img2,
  },
  {
    id: 3,
    workname: "ReactJs",
    text: "React JS — bu JavaScript kutubxonasi bo‘lib, foydalanuvchi interfeyslarini yaratishga mo‘ljallangan. Men oldingi dasturlash tillarani yaxshi organganim uchun bu dasturlash tilida uncha qi8ynalmaganman.Bu dasturlash tilida koplab dasturlar va ilovalarni jamoa bolib github orqali dasturlaganmiz",
    btncolor: "green",
    img: img3,
  },
];

export default function Aboutme() {
  return (
    <div id="Aboutme">
      {Datame.map((value, index) => (
        <div id="mecard" key={value.id}>
          <div>
            <h3>{value.workname}</h3>
            <p>{value.text}</p>
          </div>
          <img src={value.img} alt="pictur" />
        </div>
      ))}
    </div>
  );
}

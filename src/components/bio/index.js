import "./style.css";
import React, { useState, useEffect } from "react";

import imageRanger from "../../img/ranger.png";
import imageWagner from "../../img/front.webp";
import imageWagnerMob from "../../img/front-mob.png";

import a1 from "../../img/a1.jpg";
import a2 from "../../img/a2.jpg";
import a3 from "../../img/avatar.jpg";
import a4 from "../../img/a3.jpg";

import Skills from "../skills";
import Slider from "../slider";
import Sociais from "../sociais";
import Toogle from "../toggle";
import Experience from "../experience";
import Whatsapp from "../whatsapp";
import Resume from "../resume";

const getPicture = (index) => {
  switch (index) {
    case 1:
      return a1;

    case 2:
      return a2;

    case 3:
      return a3;

    case 4:
      return a4;

    default:
      return a3;
  }
};
const NUMBER_OF_PICTURES = 4;

function Bio() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) =>
        index == NUMBER_OF_PICTURES ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => {
      /* cleanup */
      clearInterval(timer);
    };
    /* on component render*/
  }, []);

  return (
    <div className="container" id="top">
      <div className="flex flex-column-mb">
        <div className="mr-50">
          <img
            className="img-bio blob blue"
            src={getPicture(index)}
            alt="Imagem do Wagner Silva"
            title="Wagner Silva"
          />
          <h5>Como me encontrar:</h5>
         
          <Sociais />
        </div>

        <div>
          <h4 className="color-green-bold">Olá, seja bem-vindo(a) 👋</h4>
          <div className="flex name-main">
            <div className="typing">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-code"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#08b9bb"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 8l-4 4l4 4"></path>
                <path d="M17 8l4 4l-4 4"></path>
                <path d="M14 4l-4 16"></path>
              </svg>
              <h1 className="typing-effect">Wagner Silva</h1>
            </div>
            <br />
            <a
              href="https://trailblazer.me/id/wdasilva13"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="img-ranger"
                src={imageRanger}
                alt="Badge do Ranger trailhead"
                title="Badge do Ranger trailhead"
              />
            </a>
          </div>

          {/* descrição */}
          <Toogle />
        </div>
      </div>

      <div>
        <Skills />

        {/* formação */}
        <Slider />

        <Resume />

        {/* banner */}
        <a href="https://blog-cms-hygraph.vercel.app/" target="_blank">
          <picture>
            <source media="(min-width: 768px)" srcset={imageWagner} />

            <img
              src={imageWagnerMob}
              alt="Imagem do Wagner"
              class="img-banner"
              title="Imagem  do Wagner"
            />
          </picture>
        </a>

        <Experience />
      </div>
      <Whatsapp />
    </div>
  );
}

export default Bio;

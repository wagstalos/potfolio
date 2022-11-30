import "./style.css";
import React, { useState, useEffect } from "react";

import imageAvatar from "../../img/avatar.jpg";
import imageRanger from "../../img/ranger.png";

import a1 from "../../img/a1.jpg";
import a2 from "../../img/a2.jpg";
import a3 from "../../img/a3.jpg";
import a4 from "../../img/a4.jpg";

import Skills from "../skills";
import Slider from "../slider";
import Sociais from "../sociais";
import Toogle from "../toggle";
import Experience from "../experience";
import Whatsapp from "../whatsapp";

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
      return a1;
  }
};
const NUMBER_OF_PICTURES = 2;

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
            alt="Imagem do autor"
          />
          <h5>Como me encontrar:</h5>
          <Sociais />
        </div>

        <div>
          <h4 className="color-green-bold">Quem sou</h4>
          <div className="flex name-main">
            <div>
              <h1>Wagner Silva</h1>
            </div>
            <a
              href="https://trailblazer.me/id/wdasilva13"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="img-expeditioner"
                src={imageRanger}
                alt="Badge do Ranger trailhead"
              />
            </a>
          </div>

          <Toogle />
        </div>
      </div>

      <div>
        <h2 className="mt-50">Skills </h2>
        <Skills />

        <h2 className="mt-50"> Formação</h2>
        <Slider />

        <h2 className="mt-50">Currículo</h2>
        <div className="flex flex-between flex-wrap">
          <div>
            <a
              className=""
              href="curriculo_wagner.pdf"
              download="curriculo_wagner.pdf"
            >
              <div className="flex btn-download">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-file-download"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#fff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                    <line x1="12" y1="11" x2="12" y2="17" />
                    <polyline points="9 14 12 17 15 14" />
                  </svg>
                </div>
                <div>{"Download CV "}</div>
              </div>
            </a>
          </div>
          <div className="flex-container flex-wrap m-50 ">
            <div className="mr-10">
              <img
                className="img-stats"
                src="https://camo.githubusercontent.com/7d732602e028285e90f6e7511544777bbbbd7db5e553b764b71e3e8a90650f16/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d7761677374616c6f73"
                alt="Anurag's GitHub stats"
                data-canonical-src="https://github-readme-stats.vercel.app/api?username=wagstalos"
              />
            </div>

            <div>
              <img
                className="img-stats"
                src="https://camo.githubusercontent.com/bd3e5aa786d946cd66a1ecfbfc4c4f4abb730d83dc8e1f09433422523115b22d/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d7761677374616c6f73266c61796f75743d636f6d70616374"
                alt="Top Langs"
                data-canonical-src="https://github-readme-stats.vercel.app/api/top-langs/?username=wagstalos&amp;layout=compact"
              />
            </div>
          </div>
        </div>

        <h2>Experiência</h2>
        <Experience />
      </div>
      <Whatsapp />
    </div>
  );
}

export default Bio;

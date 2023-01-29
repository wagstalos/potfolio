import "./style.css";
import React, { useState, useEffect } from "react";

import imageRanger from "../../img/ranger.png";

import a1 from "../../img/a1.jpg";
import a2 from "../../img/a2.jpg";
import a3 from "../../img/avatar.png";
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

        <Resume />

        <h2>Experiência</h2>
        <Experience />
      </div>
      <Whatsapp />
    </div>
  );
}

export default Bio;

import "./style.css";
import Sociais from "../sociais";
import React, { useState } from "react";

export default function Fotter() {
  const [pageYPosition, setPageYPosition] = useState(0);

  function getPageYAfterScroll() {
    setPageYPosition(window.scrollY);
  }

  window.addEventListener("scroll", getPageYAfterScroll);

  return (
    <>
      <footer className="center mt-50">
        <p>
          Desenvolvido com &#128151; por <b>Wagner Paulo</b>
        </p>
        <Sociais />
        <br />

        {pageYPosition > 600 && (
          <a href="#top" className="btn-top">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-narrow-up"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="16" y1="9" x2="12" y2="5"></line>
              <line x1="8" y1="9" x2="12" y2="5"></line>
            </svg>
          </a>
        )}
      </footer>
    </>
  );
}

import "./style.css";
import imagePerfil from "../../img/teste-perfil.jpg";
export default function Resume() {
  return (
    <>
      <h2 className="sub-title mt-50">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#08b9bb"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-file-cv"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
          <path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
          <path d="M13 11l1.5 6l1.5 -6" />
        </svg>{" "}
        Currículo
      </h2>
      <div className="flex flex-between flex-wrap">
        <div className="flex btns-resume">
          <div className="wrapper-down">
            <a
              className="btn-download"
              href="curriculo_wagner.pdf"
              download="curriculo_wagner.pdf"
              title="Baixar curriculum em PDF"
            >
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

              <span>Download CV</span>
            </a>
          </div>

          <div class="wrapper">
            <a href="#demo-modal" className="flex btn-test">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-crown"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#08b9bb"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z" />
              </svg>
              <span>Teste comportamental</span>
            </a>
          </div>

          <div id="demo-modal" className="modal">
            <div class="modal__content">
              <div className="flex">
                <svg
                  width="64px"
                  height="64px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 18.46C11.802 18.4557 11.6128 18.3772 11.47 18.24L5.76997 12.53C5.64489 12.3935 5.5755 12.2151 5.5755 12.03C5.5755 11.8449 5.64489 11.6665 5.76997 11.53L14.16 3C14.3005 2.85931 14.4911 2.78017 14.69 2.78H20.44C20.6372 2.77998 20.8264 2.85762 20.9668 2.99612C21.1072 3.13462 21.1873 3.32282 21.19 3.52L21.25 9.2C21.2503 9.40188 21.1713 9.5958 21.03 9.74L12.52 18.25C12.3803 18.3846 12.1939 18.4599 12 18.46ZM7.34997 12L12 16.64L19.76 8.89L19.7 4.27L15 4.25L7.34997 12Z"
                      fill="#08b9bb"
                    ></path>{" "}
                    <path
                      d="M14.79 21.25C14.6915 21.2505 14.5938 21.2312 14.5028 21.1935C14.4118 21.1557 14.3292 21.1001 14.26 21.03L3 9.73999C2.90861 9.59903 2.86719 9.43147 2.88238 9.26417C2.89756 9.09686 2.96848 8.9395 3.08376 8.81731C3.19904 8.69511 3.352 8.61515 3.51814 8.59026C3.68428 8.56536 3.85396 8.59695 4 8.67999L15.32 20C15.4604 20.1406 15.5393 20.3312 15.5393 20.53C15.5393 20.7287 15.4604 20.9194 15.32 21.06C15.2486 21.1252 15.165 21.1755 15.0741 21.2081C14.9831 21.2408 14.8865 21.255 14.79 21.25Z"
                      fill="#08b9bb"
                    ></path>{" "}
                    <path
                      d="M6.99999 21.19C6.89539 21.2008 6.78971 21.1894 6.68979 21.1567C6.58986 21.1239 6.49794 21.0706 6.41999 21L2.99999 17.55C2.92882 17.4774 2.87274 17.3914 2.83498 17.297C2.79722 17.2026 2.77853 17.1017 2.77999 17C2.77999 16.59 2.77999 16.58 6.88999 12.58C7.0332 12.4408 7.22587 12.3641 7.42559 12.3669C7.62532 12.3697 7.81575 12.4518 7.95499 12.595C8.09422 12.7382 8.17087 12.9309 8.16806 13.1306C8.16524 13.3303 8.0832 13.5208 7.93999 13.66C6.65999 14.91 5.25999 16.29 4.56999 17L6.99999 19.38L10.31 16C10.3789 15.9292 10.4613 15.873 10.5524 15.8346C10.6434 15.7962 10.7412 15.7764 10.84 15.7764C10.9388 15.7764 11.0366 15.7962 11.1276 15.8346C11.2186 15.873 11.301 15.9292 11.37 16C11.5104 16.1406 11.5893 16.3312 11.5893 16.53C11.5893 16.7287 11.5104 16.9194 11.37 17.06L7.47999 21C7.34578 21.1153 7.17675 21.1822 6.99999 21.19Z"
                      fill="#08b9bb"
                    ></path>{" "}
                    <path
                      d="M12 12.75C11.9014 12.7505 11.8038 12.7312 11.7128 12.6935C11.6218 12.6557 11.5392 12.6001 11.47 12.53C11.3295 12.3894 11.2506 12.1988 11.2506 12C11.2506 11.8013 11.3295 11.6106 11.47 11.47L15.47 7.47C15.5386 7.39631 15.6214 7.33721 15.7134 7.29622C15.8054 7.25523 15.9048 7.23319 16.0055 7.23141C16.1062 7.22963 16.2062 7.24816 16.2996 7.28588C16.393 7.3236 16.4778 7.37974 16.549 7.45096C16.6202 7.52218 16.6764 7.60701 16.7141 7.7004C16.7518 7.79379 16.7703 7.89382 16.7686 7.99452C16.7668 8.09523 16.7448 8.19454 16.7038 8.28654C16.6628 8.37854 16.6037 8.46134 16.53 8.53L12.53 12.53C12.4607 12.6001 12.3782 12.6557 12.2872 12.6935C12.1962 12.7312 12.0985 12.7505 12 12.75Z"
                      fill="#08b9bb"
                    ></path>{" "}
                  </g>
                </svg>
                <h2>Perfil Guerreiro</h2>
              </div>

              {/* <ol>
                <li>
                  Crença de que alcançar metas e resultados dão sentido à vida;
                </li>
                <li>São muito rápidos na execução de suas atividades;</li>
                <li>
                  Para alcançar seus objetivos, ultrapassam barreiras com muita
                  facilidade;
                </li>
                <li>
                  São muito objetivos e dão resultados em pouquíssimo tempo;
                </li>
                <li>Mediante uma dificuldade não se abatem facilmente;</li>
                <li>
                  Procuram soluções fora do convencional para atingir seus
                  objetivos.
                </li>
              </ol> */}
              <img
                src={imagePerfil}
                alt="imagem perfil"
                title="imagem perfil"
              />
              <p>
                {" "}
                <i>fonte: mindsight.com.br</i>{" "}
              </p>

              <a href="#" class="modal__fechar">
                ×
              </a>
            </div>
          </div>
        </div>
        <div className="flex-container flex-wrap m-50 stats">
          <picture>
            <source
              className="img-stats"
              srcset="https://github-readme-stats.vercel.app/api?username=wagstalos&show_icons=true&theme=dracula&text_color=434d58&bg_color=F7F7FA&hide_border=true&title_color=08b9bb"
              media="(prefers-color-scheme: dark)"
            />
            <source
              srcset="https://github-readme-stats.vercel.app/api?username=wagstalos&show_icons=true"
              media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
            />
            <img
              src="https://github-readme-stats.vercel.app/api?username=wagstalos&show_icons=true"
              title="gitstatus"
              alt="git status"
            />
          </picture>
        </div>
      </div>
    </>
  );
}

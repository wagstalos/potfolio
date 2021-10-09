import "./style.css";
import imageAvatar from "../../img/avatar.jpg";
import Skills from "../skills";
import Slider from "../slider";
import Sociais from "../sociais";
import Toogle from "../toggle";
import Experience from "../experience";

function Bio() {
  return (
    <div className="container">
      <div className="flex flex-column-mb">
        <div className="mr-50">
          <img className="img-bio blob blue" src={imageAvatar} alt="Imagem do autor" />
          <h5>Redes socias</h5>
            <Sociais />
        </div>

        <div>
          <h4 className="destaque">Quem sou</h4>
          <h1>Wagner Paulo</h1>
          <Toogle />
        </div>
      </div>

      <div>
        <h3>Skills</h3>
        <Skills />

        <h3 className="mt-50">Formação</h3>
        <Slider />

        <h3 className="mt-50">Currículo</h3>
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
                    class="icon icon-tabler icon-tabler-file-download"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#08b9bb"
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

        <h3>Experiência</h3>
        <Experience />
      </div>
    </div>
  );
}

export default Bio;

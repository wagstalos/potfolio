import React from "react";
import Badge from "../badges";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <div>
        <p>
          Olá, sou Wagner Paulo, <b>Desenvolvedor Fullstack</b>. Sou formado em
          Design Gráfico pela UNIP, em Desenvolvimento de Jogos Digitais pela
          ETEC e Pós-Graduado em Desenvolvimento Fullstack de Sistemas Modernos
          para Nuvem pela UNESC. Apaixonado por tecnologia, atuo na produção de
          sites, E-commerce com Salesforce Commerce Cloud (SFCC), desenvolvendo
          para clientes como Tramontina, Fini, São Vicente, Copercana e Oi
          Place. Além disso, tenho experiência em WordPress, SEO, aplicativos,
          PWA e jogos digitais, utilizando metodologias ágeis como Scrum e
          Kanban. Trabalho também com Salesforce Apex e Lightning Web Components
          (LWC), desenvolvendo soluções inovadoras na plataforma.
        </p>

        <Badge />

        <div>
          <a
            className="btn-download btn-hero"
            href="curriculo_wagner.pdf"
            download="curriculo_wagner.pdf"
            title="Download CV as PDF"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-file-download"
              width="24"
              height="24"
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
      </div>
    );
  }
}

export default Toggle;

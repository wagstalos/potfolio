import React from "react";

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
          {this.state.isToggleOn
            ? "Olá, sou Wagner Paulo <frontend />, formado em Design Gráfico (UNIP) , Desenvolvimento de Jogos Digitais(ETEC) e Pós-Graduado em Desenvolvimento Fullstack de Sistemas Modernos para Nuvem (UNESC). Apaixonado por tecnologias, trabalho com produção de sites, E-commerce (Salesforce SFCC) com cliente como Tramontina, Fini, São Vicente, Copercana, Oi Place,, WordPress, SEO, aplicativos, PWA e jogos digitais utlizando metodologias ágeis como Scrum e Kanban ."
            : "Hi, I'm Wagner Paulo, <frontend />, graduated in Graphic Design (UNIP) and Digital Game Development (ETEC). I'm completely in love for technology, I work with website production, E-commerce (Salesforce SFCC)  WordPress, SEO, apps, PWA and digital games using agile methodologies such as Scrum and Kanban."}
        </p>
        {/* <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "Bio in english" : "Mudar para Português"}
        </button> */}
        <div>
          <a
            className="btn-download btn-hero"
            href="curriculo_wagner.pdf"
            download="curriculo_wagner.pdf"
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

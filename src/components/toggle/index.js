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
            ? "Olá, sou Wagner Paulo <frontend />, formado em Design Gráfico (UNIP) , Desenvolvimento de Jogos Digitais(ETEC) e cursando Pós-Graduação Desenvolvimento Fullstack de Sistemas Modernos para Nuvem (Cloud Native). Apaixonado por tecnologias, trabalho com produção de sites, E-commerce (Salesforce SFCC), WordPress, SEO, aplicativos, PWA e jogos digitais utlizando metodologias ágeis como Scrum e Kanban ."
            : "Hi, I'm Wagner Paulo, <frontend />, graduated in Graphic Design (UNIP) and Digital Game Development (ETEC). I'm completely in love for technology, I work with website production, E-commerce (Salesforce SFCC), WordPress, SEO, apps, PWA and digital games using agile methodologies such as Scrum and Kanban."}
        </p>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "Bio in english" : "Mudar para Português"}
        </button>
      </div>
    );
  }
}

export default Toggle;

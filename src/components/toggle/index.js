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
            ? "Olá, sou Wagner Paulo, profissional da área Desenvolvimento Web e Games , formado em Design Gráfico (UNIP) e Desenvolvimento de Jogos Digitais(ETEC). Apaixonado por tecnologias, trabalho com produção de sites, E-commerce (Salesforce SFCC), WordPress, SEO, aplicativos, PWA e jogos digitais utlizando metodologias ágeis como Scrum e Kanban ."
            : "Hi, I'm Wagner Paulo, professional in the area of ​​Web and Games Development, graduated in Graphic Design (UNIP) and Digital Games Development (ETEC). Passionate about technologies, I work with the production of websites, WordPress, SEO applications, PWA and digital games."}
        </p>
        {/* <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "Change English" : "Português"}
        </button> */}
      </div>
    );
  }
}

export default Toggle;

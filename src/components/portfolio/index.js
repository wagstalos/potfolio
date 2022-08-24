import { Component } from "react";
import "./style.css";

class Portfolio extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    fetch("https://wpsgames.com.br/app/api/projetos.json")
      .then((response) => response.json())
      .then((posts) => this.setState({ posts }));
  }

  render() {
    const { posts } = this.state;

    return (
      <>
        <div className="flex center portfolio">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-code"
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
            <polyline points="7 8 3 12 7 16" />
            <polyline points="17 8 21 12 17 16" />
            <line x1="14" y1="4" x2="10" y2="20" />
          </svg>
          <h2 className="text-center">Meus projetos</h2>
        </div>

        <div className="flex-container flex-wrap flex center">
          {posts.reverse().map((post) => (
            <div className="card" key={post.id}>
              <img src={post.img} alt={post.title} />
              <p className="tag-new">{post.new}</p>
              <h3 className="m-14">{post.title}</h3>
              <p className="m-14">{post.body} </p>
              <div class="flex">
                <p class="tag categoria">{post.tag} </p>
                <p class="tag categoria">{post.categoria} </p>
              </div>
              <a className="botao" href={post.url} target="_blank">
                Veja mais
              </a>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default Portfolio;

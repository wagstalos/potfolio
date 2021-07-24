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
        <div className="flex center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-apple-arcade"
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
            <circle cx="12" cy="5" r="2" />
            <path d="M20 12.5v4.75a0.734 .734 0 0 1 -.055 .325a0.704 .704 0 0 1 -.348 .366l-5.462 2.58a4.998 4.998 0 0 1 -4.27 0l-5.462 -2.58a0.705 .705 0 0 1 -.401 -.691l-.002 -4.75" />
            <path d="M4.431 12.216l5.634 -2.332a5.065 5.065 0 0 1 3.87 0l5.634 2.332a0.692 .692 0 0 1 .028 1.269l-5.462 2.543a5.064 5.064 0 0 1 -4.27 0l-5.462 -2.543a0.691 .691 0 0 1 .028 -1.27z" />
            <line x1="12" y1="7" x2="12" y2="13" />
          </svg>
          <h2 className="text-center">Meus projetos</h2>
        </div>

        <div className="flex-container flex-wrap">
          {posts.map((post) => (
            <div className="card" key={post.id}>
              <img src={post.img} alt={post.title} />
              <h2 className="m-14">{post.title}</h2>
              <p className="m-14">{post.body} </p>
              <div class="flex">
                <p class="tag categoria">{post.tag} </p>
                <p class="tag categoria">{post.categoria} </p>
              </div>
              <a className="botao" href={post.url}>
                Veja mais{" "}
              </a>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default Portfolio;

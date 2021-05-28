import { Component } from 'react';
import './style.css';

class Portfolio extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch('https://wpsgames.com.br/app/api/projetos.json')
      .then(response => response.json())
      .then(posts => this.setState({ posts }))
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="flex-container flex-wrap">
        {posts.map(post => (
          <div className="card" key={post.id} >
              <img src={post.img} alt=""/>
              <h2 className="m-14">{post.title}</h2>
              <p className="m-14">{post.body} </p>
              <div class="flex">
                <p class="tag categoria">{post.tag} </p>
                <p class="tag categoria">{post.categoria} </p>
              </div>
              <a className="botao" href={post.url} >Veja mais </a>
            </div>
          )
          )}
          </div>
        );
  }
}
export default Portfolio;

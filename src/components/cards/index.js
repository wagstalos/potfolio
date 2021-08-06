import "./style.css";
import iconFormacao from "../../img/icon-formacao.svg";

export default function Card(props) {
  return (
    <>
      <div className="card-formacao compCard">
        <img
          className="icon-formacao"
          src={iconFormacao}
          alt="Imagem do autor"
        />
        <h3>{props.ano}</h3>
        <h4>{props.curso}</h4>
        <p>{props.escola}</p>
      </div>
    </>
  );
}

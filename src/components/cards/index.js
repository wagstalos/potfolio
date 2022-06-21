import "./style.css";
import iconFormacao from "../../img/icon-formacao.svg";

export default function Card(props) {
  return (
    <>
      <div className="card-formacao compCard">
        <div className="card-top">
          <img
            className="icon-formacao"
            src={iconFormacao}
            alt="icone formatura"
          />
          <h3>{props.ano}</h3>
        </div>

        <h4>{props.curso}</h4>
        <p>{props.escola}</p>
      </div>
    </>
  );
}

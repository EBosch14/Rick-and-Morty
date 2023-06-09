import { Link } from "react-router-dom";
import "./Card.css";
import { IconClose, IconFav, IconInfo } from "../assets/Icons/Icons";

export default function Card(props) {
  return (
    // <div key={props.id} className={styles.Card}>
    //    <button onClick={()=> props.onClose(props.id)}>X</button>
    //    <Link to={`/details/${props.id}`}>
    //       <h2>{props.name}</h2>
    //    </Link>
    //    <h2>{props.status}</h2>
    //    <h2>{props.species}</h2>
    //    <h2>{props.gender}</h2>
    //    <h2>{props.origin}</h2>
    //    <img src={props.image} alt={props.name}/>
    // </div>
    <div className="card">
      <div className="blob"></div>
      <span className="img">
        <img src={props.image} alt={props.name} />
      </span>
      <h2>{props.name}</h2>
      <div className="details">
        <div>
          <span>STATUS</span>
          <span>{props.status}</span>
        </div>
        <div>
          <span>SPECIE</span>
          <span>{props.species}</span>
        </div>
      </div>
      <div className="buttons">
        <button className="close-button" onClick={() => props.onClose(props.id)}>
          <span className="iconClose">
            <IconClose></IconClose>
          </span>
        </button>
        <button className="fav-button">
          <span className="iconFav">
            <IconFav></IconFav>
          </span>
        </button>
        <Link className="moreInfo-button" to={`/Details/${props.id}`}>
          <span className="iconInfo">
            <IconInfo></IconInfo>
          </span>
        </Link>
      </div>
    </div>
  );
}

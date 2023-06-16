import { Link } from "react-router-dom";
import "./Card.css";
import { IconClose, IconFav, IconInfo } from "../assets/Icons/Icons";
import { connect } from "react-redux";
import { addFav, removeFav } from "../redux/actions/actions";
import { useEffect, useState } from "react";

function Card(props) {
  const { addFav, removeFav, myFavorites } = props;
  const [isFav, setIsFav] = useState(false);

  const handleFavorites = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(props.id);
    } else {
      setIsFav(true);
      addFav(props);
    }
  };

  useEffect(() => {
    myFavorites.forEach(favs => {
      if (favs.id === props.id) {
        setIsFav(true)
      }
    })
  }, [myFavorites]);

  return (
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
        <button
          className="close-button"
          onClick={() => props.onClose(props.id)}
        >
          <span className="iconClose">
            <IconClose></IconClose>
          </span>
        </button>
        <button
          className={isFav ? "fav-button-active" : "fav-button"}
          onClick={handleFavorites}
        >
          <span className="iconFav">
            <IconFav></IconFav>
          </span>
        </button>
        <Link className="moreInfo-button" to={`/details/${props.id}`}>
          <span className="iconInfo">
            <IconInfo></IconInfo>
          </span>
        </Link>
      </div>
    </div>
  );
}

function mapStateToProp(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

function mapDispatchToProp(dispatch) {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
}

export default connect(mapStateToProp, mapDispatchToProp)(Card);

import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import SearchBar from "./SearchBar";
import { IconRaM } from "../assets/Icons/Icons";

export default function Navbar({onSearch, onRandom}) {
  return (
    <nav className={style.Navbar}>
      <div>
        <Link to="/">
          <IconRaM></IconRaM>
        </Link>
      </div>
      <SearchBar onSearch={onSearch} />
      <button className={style.random} onClick={onRandom}>Random</button>
      <ul className={style.links}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="about">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}

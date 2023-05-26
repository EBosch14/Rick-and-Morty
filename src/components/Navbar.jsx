import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import SearchBar from "./SearchBar";
import { IconRaM } from "../assets/Icons/Icons";

export default function Navbar() {
  return (
    <nav className={style.Navbar}>
      <div>
        <Link to="/home">
          <IconRaM></IconRaM>
        </Link>
      </div>
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      <ul className={style.links}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}

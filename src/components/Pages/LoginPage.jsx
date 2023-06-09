import { Link } from "react-router-dom";
import s from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={s.LoginForm}>
      <div className={s.imgLogin}>
        <img
          src="https://i.etsystatic.com/26896560/r/il/2a27fb/2903798650/il_1140xN.2903798650_d8hi.jpg"
          alt="rickandmortyLogin"
        />
      </div>
      <form action="">
        <div className={s.username}>
          <label htmlFor="username">Username</label>
          <input type="text" />
        </div>
        <div className={s.password}>
          <label htmlFor="password">Password</label>
          <input type="password" />
        </div>
        <button className={s.loginButton} type="submit">
          Log In
        </button>
      </form>
      or
      <Link to={'/register'}>
        <button className={s.registerButton}>Register</button>
      </Link>
    </div>
  );
}

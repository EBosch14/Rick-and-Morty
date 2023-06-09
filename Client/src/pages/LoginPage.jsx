import { Link, useNavigate } from "react-router-dom";
import s from "./LoginPage.module.css";
import { useState } from "react";

export default function LoginPage() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({

  })
  const navigate = useNavigate()

  const handleSumbit = (event) => {
    event.preventDefault()
    console.log(userData);
    if (userData.username && userData.password) navigate('/home') 
  }

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={s.LoginForm}>
      <div className={s.imgLogin}>
        <img
          src="https://i.etsystatic.com/26896560/r/il/2a27fb/2903798650/il_1140xN.2903798650_d8hi.jpg"
          alt="rickandmortyLogin"
        />
      </div>
      <form action="" onSubmit={handleSumbit}>
        <div className={s.username}>
          <label htmlFor="username">Username</label>
          <input name="username" type="text" onChange={handleChange} />
        </div>
        <div className={s.password}>
          <label htmlFor="password">Password</label>
          <input name="password" type="password" onChange={handleChange} />
        </div>
        <button className={s.loginButton} type="submit" disabled={!(userData.password && userData.username)}>
          Log In
        </button>
      </form>
      or
      <Link to={"/register"}>
        <button className={s.registerButton}>Register</button>
      </Link>
    </div>
  );
}
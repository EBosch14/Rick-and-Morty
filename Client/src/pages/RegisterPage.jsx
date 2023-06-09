import s from "./RegisterPage.module.css"

export default function RegisterPage() {
  return (
    <div className={s.LoginForm}>
      <div className={s.imgLogin}>
        <img
          src="https://wallpapercave.com/wp/wp5015290.png"
          alt="rickandmortyLogin"
        />
      </div>
      <form action="">
        <div className={s.email}>
          <label htmlFor="email">E-mail</label>
          <input type="email" />
        </div>
        <div className={s.username}>
          <label htmlFor="username">Username</label>
          <input type="text" />
        </div>
        <div className={s.password}>
          <label htmlFor="password">Password</label>
          <input type="password" />
        </div>
        <button className={s.registerButton} type="submit" disabled>
          Register
        </button>
      </form>
    </div>
  );
}

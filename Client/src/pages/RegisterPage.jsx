import { useEffect, useState } from "react";
import s from "./RegisterPage.module.css";
import { validateRegister } from "../utils/validateRegister";

export default function RegisterPage() {
  const [fromComplete, setFromComplete] = useState(false);
  const [focus, setFocus] = useState({
    email: false,
    username: false,
    password: false,
  });

  const [inputs, setInputs] = useState({
    email: undefined,
    username: undefined,
    password: undefined,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const prop = event.target.name;
    const value = event.target.value;

    //prevent spaces key
    if (prop === "username" || prop === "email") {
      if (event.key === " ") event.preventDefault();
    }

    //set inputs with their values
    if (prop === "email" && value.length <= 50) {
      setInputs((prevState) => ({
        ...prevState,
        email: value,
      }));
    } else if (prop === "username" && value.length <= 20) {
      setInputs((prevState) => ({
        ...prevState,
        username: value,
      }));
    } else if (prop === "password") {
      setInputs((prevState) => ({
        ...prevState,
        password: value,
      }));
    }
  };

  useEffect(() => { 
    setErrors(validateRegister(inputs, focus));
  }, [inputs, focus]);

  useEffect(() => {
    setFromComplete(inputs.email && inputs.username && inputs.password && Object.keys(errors).length === 0);
  }, [errors]);

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
          <input
            className={errors.email ? s.errorField : undefined}
            name="email"
            type="email"
            value={inputs.email}
            onChange={handleChange}
            onKeyDown={handleChange}
            onPaste={(event) => event.preventDefault()}
            onFocus={(event) =>
              setFocus({ ...focus, [event.target.name]: true })
            }
            onBlur={(event) =>
              setFocus({ ...focus, [event.target.name]: false })
            }
          />
          {errors.email && <p className={s.errorMsg}>{errors.email}</p>}
        </div>
        <div className={s.username}>
          <label htmlFor="username">Username</label>
          <input
            className={errors.username ? s.errorField : undefined}
            name="username"
            type="text"
            value={inputs.username}
            onChange={handleChange}
            onKeyDown={handleChange}
            onPaste={(event) => event.preventDefault()}
            onFocus={(event) =>
              setFocus({ ...focus, [event.target.name]: true })
            }
            onBlur={(event) =>
              setFocus({ ...focus, [event.target.name]: false })
            }
          />
          {errors.username && <p className={s.errorMsg}>{errors.username}</p>}
        </div>
        <div className={s.password}>
          <label htmlFor="password">Password</label>
          <input
            className={errors.password ? s.errorField : undefined}
            name="password"
            type="password"
            value={inputs.password}
            onChange={handleChange}
            onFocus={(event) =>
              setFocus({ ...focus, [event.target.name]: true })
            }
            onBlur={(event) =>
              setFocus({ ...focus, [event.target.name]: false })
            }
          />
          {errors.password && <p className={s.errorMsg}>{errors.password}</p>}
        </div>
        <button
          className={s.registerButton}
          type="submit"
          disabled={!fromComplete}
        >
          Register
        </button>
      </form>
    </div>
  );
}

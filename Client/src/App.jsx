import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Cards from "./pages/Cards.jsx";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Details from "./pages/Details";
import Error from "./pages/Error";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { requestAPI } from "./services/requestAPI";
import { characterExists } from "./utils/characterExists";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [access, setAccess] = useState(false);

  const onSearch = (id) => {
    if (characterExists(characters, id)) {
      window.alert("This character is already shown");
      return;
    }
    requestAPI(characters, setCharacters, id);
  };

  const onRandom = () => {
    const randomNumber = Math.floor(Math.random() * 826) + 1;

    if (characterExists(characters, randomNumber)) {
      window.alert("This character is already shown");
      return;
    }

    requestAPI(characters, setCharacters, randomNumber);
  };

  const onClose = (id) => {
    const charactersFilter = characters.filter(
      (character) => character.id !== id
    );
    setCharacters([...charactersFilter]);
  };

  return (
    <div className={styles.App}>
      {location.pathname !== "/" && location.pathname !== "/register" && (
        <Navbar onSearch={onSearch} onRandom={onRandom} />
      )}
      <Routes className={styles.App}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route exact path="/details/:id" element={<Details />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;

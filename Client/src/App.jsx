import { useState } from "react";
import styles from "./App.module.css";
import Cards from "./Pages/Cards.jsx";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Details from "./Pages/Details";
import Error from "./Pages/Error";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  const onSearch = (id) => {
    const isCharacterExists = characters.some(
      (character) => character.id.toString() === id
    );

    if (isCharacterExists) {
      window.alert("This character is already shown");
      return;
    }

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.name) {
          setCharacters((prevState) => [...prevState, data]);
        } else {
          window.alert("Character not found!");
        }
      })
      .catch((error) => {
        console.error("Error fetching character:", error);
        window.alert("Failed to fetch character. Please try again.");
      });
  };

  const onClose = (id) => {
    const charactersFilter = characters.filter(
      (character) => character.id !== id
    );
    setCharacters([...charactersFilter]);
  };

  const onRandom = () => {
    const randomNumber = Math.floor(Math.random() * 826) + 1;
    const isCharacterExists = characters.some(
      (character) => character.id === randomNumber
    );

    if (isCharacterExists) {
      window.alert("This character is already shown");
      return;
    }

    fetch(`https://rickandmortyapi.com/api/character/${randomNumber}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.name) {
          setCharacters((prevState) => [...prevState, data]);
        } else {
          window.alert("Character not found!");
        }
      })
      .catch((error) => {
        console.error("Error fetching character:", error);
        window.alert("Failed to fetch character. Please try again.");
      });
  };

  return (
    <div className={styles.App}>
      {(location.pathname !== "/" && location.pathname !== "/register") && (
        <Navbar onSearch={onSearch} onRandom={onRandom} />
      )}
      <Routes className={styles.App}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>}></Route>
        <Route path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route exact path="/details/:id" element={<Details />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;

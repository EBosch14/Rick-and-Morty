import styles from "./App.module.css";
import Cards from "./components/Cards.jsx";
import Navbar from "./components/Navbar";
import characters, { Rick } from "./data.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Routes className={styles.App}>
        <Route path="/" element={<Cards characters={characters} />} />
        <Route path="/home" element={<Cards characters={characters} />} />
      </Routes>
    </div>
  );
}

export default App;

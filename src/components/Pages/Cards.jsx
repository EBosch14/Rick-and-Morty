import Card from "../Card";
import styles from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={styles.Cards}>
      {characters.length ? characters.map((el) => (
        <Card
          key={el.id}
          name={el.name}
          status={el.status}
          species={el.species}
          gender={el.gender}
          origin={el.origin.name}
          image={el.image}
          onClose={onClose}
          id={el.id}
        ></Card>
      )) : (
        <p>At this moment there is nothing :(</p>
      )}
    </div>
  );
}

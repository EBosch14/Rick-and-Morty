import Card from "./Card";
import styles from './Cards.module.css'

export default function Cards({characters}) {
  return (
    <div className={styles.Cards}>
      {characters.map((el) => (
        <Card
          key={el.id}
          name={el.name}
          status={el.status}
          species={el.species}
          gender={el.gender}
          origin={el.origin.name}
          image={el.image}
					onClose={() => window.alert('Emulamos que se cierra la card')}
        ></Card>
      ))}
    </div>
  );
}

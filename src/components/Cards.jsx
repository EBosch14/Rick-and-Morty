import Card from "./Card";

export default function Cards(props) {
  return (
    <div>
      {props.characters.map((el) => (
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

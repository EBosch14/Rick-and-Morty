import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card(props) {
   return (
      <div key={props.id} className={styles.Card}>
         <button onClick={()=> props.onClose(props.id)}>X</button>
         <Link to={`/details/${props.id}`}>
            <h2>{props.name}</h2>
         </Link>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img src={props.image} alt={props.name}/>
      </div>
   );
}

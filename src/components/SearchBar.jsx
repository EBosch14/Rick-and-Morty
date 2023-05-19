import styles from './SearchBar.module.css';

export default function SearchBar(props) {
   return (
      <div className={styles.SearchBar}>
         <input type='search'/>
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}

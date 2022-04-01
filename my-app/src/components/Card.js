import classes from "./Card.module.css";

function Card(props) {
  return (
    <div className={classes.pokemon}>
    <a href={props.url} target="_blank" rel="noreferrer">
      <h2 className={classes.name}>{props.name}</h2>
      <img
        alt={props.name}
        src={`https://img.pokemondb.net/artwork/large/${props.name}.jpg`}
      ></img>
    </a>
    </div>
  );
}

export default Card;

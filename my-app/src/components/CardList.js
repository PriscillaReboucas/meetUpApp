import Card from "./Card";
import classes from "./CardList.module.css";

function CardList(props) {
  console.log(props);
  return (
    <ul className={classes.list}>
      {props.pokemons.map((pokemon, index) => {
        return <Card key={index} name={pokemon.name} url={pokemon.url} />;
      })}
    </ul>
  );
}

export default CardList;

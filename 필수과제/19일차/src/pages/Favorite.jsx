import { useSelector } from "react-redux"
import { Card } from "../component/Card"
import List from "../component/PokemonMap"

const Favorite = () => {
  const pokemonFavorite = useSelector((state) => state.favorite)

  return (
    <>
      <List>
        {pokemonFavorite.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </List>
    </>
  )
}

export default Favorite

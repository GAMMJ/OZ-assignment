import { useSelector } from "react-redux"
import { Card } from "../component/Card"
import List from "../component/PokemonMap"

export default function Main() {
  const pokemonData = useSelector((state) => state.pokemon.data)

  return (
    <List>
      {pokemonData.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </List>
  )
}

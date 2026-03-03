import { getRegExp } from "korean-regexp"
import { useSearchParams } from "react-router"
import { useSelector } from "react-redux"
import { Card } from "../component/Card"
import List from "../component/PokemonMap"

const Search = () => {
  const [searchParams] = useSearchParams()
  const param = searchParams.get("pokemon") || ""
  const reg = getRegExp(param)

  const pokemonList = useSelector((state) => state.pokemon.data)
  const searchPokemon = pokemonList.filter((pokemon) => pokemon.name.match(reg))

  return (
    <List>
      {searchPokemon.length === 0 ? (
        <div>포켓몬이 없습니다.</div>
      ) : (
        searchPokemon.map((pokemon) => <Card key={pokemon.id} pokemon={pokemon} />)
      )}
    </List>
  )
}

export default Search

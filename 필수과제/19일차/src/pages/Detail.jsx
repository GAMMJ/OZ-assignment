import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectPokemonById } from "../RTK/selector"
import { FlipImage } from "../component/FlipImage"
import { FavoriteButton } from "../component/FavoriteButton"

export default function Detail() {
  const { pokemonId } = useParams()
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)))

  if (!pokemon) {
    return <div>포켓몬이 없습니다.</div>
  }

  return (
    <div className="flex justify-center">
      <section className="flex flex-col justify-center items-center text-center w-100 min-h-130 p-5 text-[#1e1e1e] bg-white rounded-2xl gap-2.5 shadow-[4px_4px_0px_black]">
        <div className="flex items-center text-3xl mb-3">
          {pokemon.name}
          <FavoriteButton pokemonId={Number(pokemon.id)} />
        </div>
        <div className="whitespace-pre-wrap text-[18px]">{pokemon.description}</div>
        <FlipImage front={pokemon.front} back={pokemon.back} />
      </section>
    </div>
  )
}

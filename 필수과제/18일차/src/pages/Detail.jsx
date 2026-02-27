import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectPokemonById } from "../RTK/selector"

export default function Detail() {
  const { pokemonId } = useParams()
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)))

  return (
    <div className="bg-white flex flex-col justify-center items-center border py-[30px] px-[60px] rounded-[10px] border-b-[8px] border-r-[8px] border-black text-black  ">
      <div className="text-[28px] mb-[10px]">{pokemon.name}</div>
      <div className="whitespace-pre-wrap text-center">{pokemon.description}</div>
      <img className="w-[200px]" src={pokemon.front} alt={pokemon.name} />
    </div>
  )
}

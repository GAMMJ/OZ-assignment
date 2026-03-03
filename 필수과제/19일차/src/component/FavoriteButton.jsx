import { useDispatch, useSelector } from "react-redux"
import { addToFavorite, removeFromFavorite } from "../RTK/favoriteSlice"

export const FavoriteButton = ({ pokemonId }) => {
  const isFavorite = useSelector((state) => state.favorite.some((pokemon) => pokemon.id === pokemonId))
  const pokemon = useSelector((state) => state.pokemon.data.find((p) => p.id === pokemonId))
  const dispatch = useDispatch()

  const handleFavorite = (e) => {
    e.stopPropagation()
    if (isFavorite) {
      dispatch(removeFromFavorite({ pokemonId }))
    } else {
      dispatch(addToFavorite(pokemon))
    }
  }

  return (
    <button onClick={handleFavorite} className={`mt-1 ml-1 ${isFavorite ? "text-red-500" : ""}`}>
      {isFavorite ? "♥" : "♡"}
    </button>
  )
}

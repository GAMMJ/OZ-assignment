import { lazy, Suspense, useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchMultiplePokemonById } from "./RTK/thunk"
import { Route, Routes } from "react-router-dom"
import Header from "./component/Header"
import PokemonErrorBoundary from "./component/ErrorBoundary"
import { Loading } from "./component/Loading"

const Main = lazy(() => import("./pages/Main"))
const Detail = lazy(() => import("./pages/Detail"))
const Search = lazy(() => import("./pages/Search"))
const Favorite = lazy(() => import("./pages/Favorite"))

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151))
  }, [])

  return (
    <div className="bg-[#818181] min-h-screen">
      <Header />
      <main className="p-4">
        <PokemonErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/detail/:pokemonId" element={<Detail />}></Route>
              <Route path="/search" element={<Search />}></Route>
              <Route path="/favorite" element={<Favorite />}></Route>
            </Routes>
          </Suspense>
        </PokemonErrorBoundary>
      </main>
    </div>
  )
}

export default App

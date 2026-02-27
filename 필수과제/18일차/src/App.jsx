import { lazy, Suspense, useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchMultiplePokemonById } from "./RTK/thunk"
import { Route, Routes } from "react-router-dom"
import Header from "./component/Header"

const Main = lazy(() => import("./pages/Main"))
const Detail = lazy(() => import("./pages/Detail"))
const Search = lazy(() => import("./pages/Search"))
const Favorite = lazy(() => import("./pages/Favorite"))

function App() {
  const ditpatch = useDispatch()

  useEffect(() => {
    ditpatch(fetchMultiplePokemonById(151))
  }, [])

  return (
    <>
      <Header />
      <main className="bg-[gray] flex flex-wrap gap-[20px] justify-center items-start content-start pt-[20px] pb-[20px] min-h-screen">
        <Suspense fallback={<div>로딩중...</div>}>
          <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path={"/detail/:pokemonId"} element={<Detail />} />
            <Route path={"/search"} element={<Search />} />
            <Route path={"/favorite"} element={<Favorite />} />
          </Routes>
        </Suspense>
      </main>
    </>
  )
}

export default App

import { useEffect } from "react"
import useFetch from "./hook/useFetch"
import { RandomQuote, StopWatch, TodoHeader, TodoInput, TodoList } from "./components"
import { useTodoDispatch } from "./context/TodoContext"

const App = () => {
  const [, data] = useFetch("http://localhost:3000/todo")
  const dispatch = useTodoDispatch()

  useEffect(() => {
    if (data) dispatch({ type: "INIT_TODOS", payload: data })
  }, [data, dispatch])

  return (
    <div className="w-[800px] h-auto bg-[#e9e9e9] py-[30px] px-[60px] rounded-[30px] shadow-[0_4px_8px_rgba(0,0,0,0.12)]">
      <TodoHeader />
      <RandomQuote />
      <TodoInput />
      <TodoList />
      <StopWatch />
    </div>
  )
}

export default App

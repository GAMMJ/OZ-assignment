/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react"
import todoReducer from "../reducers/todoReducer"

const TodoContext = createContext()
const TodoDispatchContext = createContext()

export const TodoProvider = ({ children }) => {
  const [todoList, dispatch] = useReducer(todoReducer, [])

  return (
    <TodoContext.Provider value={todoList}>
      <TodoDispatchContext.Provider value={dispatch}>{children}</TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}

// Custom hooks
export const useTodoList = () => {
  const context = useContext(TodoContext)
  if (context === undefined) {
    throw new Error("useTodoList는 반드시 TodoProvider 안에서 사용되어야 합니다")
  }
  return context
}

export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext)
  if (context === undefined) {
    throw new Error("useTodoDispatch는 반드시 TodoProvider 안에서 사용되어야 합니다.")
  }
  return context
}

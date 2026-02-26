import { memo } from "react"
import Todo from "./Todo"
import { useTodoList } from "../context/TodoContext"

const TodoList = memo(() => {
  const todoList = useTodoList()
  return (
    <div>
      <ul className="list-none p-0 flex flex-col gap-[10px]">
        {todoList.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
})

export default TodoList

import { memo } from "react"
import Todo from "./Todo"
import { useTodoList } from "../context/TodoContext"
import { useSortList } from "../hook/useSortList"

const TodoList = memo(() => {
  const todoList = useTodoList()

  const { handleDragStart, handleDragOver, handleDrop } = useSortList()

  return (
    <div>
      <ul className="list-none p-0 flex flex-col gap-[10px]">
        {todoList.map((todo, index) => (
          <Todo
            key={todo.id}
            todo={todo}
            index={index}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
          />
        ))}
      </ul>
    </div>
  )
})

export default TodoList

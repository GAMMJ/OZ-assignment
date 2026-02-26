import { useRef } from "react"
import { useTodoDispatch } from "../context/TodoContext"

const TodoInput = () => {
  const dispatch = useTodoDispatch()
  const inputRef = useRef(null)

  const addTodo = () => {
    const newTodo = {
      content: inputRef.current.value,
      completed: false,
    }
    fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then((res) => res.json())
      .then((res) => dispatch({ type: "ADD_TODO", payload: res }))

    inputRef.current.value = ""
  }

  return (
    <div className="flex items-center justify-center my-5">
      <input
        className="outline-none border-none rounded-[10px] bg-[#d4d4d4] p-[10px] text-[#1e1e1e] mr-5"
        ref={inputRef}
        onKeyDown={(e) => e.key === "Enter" && addTodo()}
      />
      <button className="btn" onClick={addTodo}>
        추가
      </button>
    </div>
  )
}

export default TodoInput

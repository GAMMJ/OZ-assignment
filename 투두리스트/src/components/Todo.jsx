import { memo, useState } from "react"
import CheckBox from "./CheckBox"
import { useTodoDispatch } from "../context/TodoContext"

const Todo = memo(({ todo, index, handleDragStart, handleDragOver, handleDrop }) => {
  const dispatch = useTodoDispatch()
  const [inputValue, setInputValue] = useState("")
  const [isEdit, setIsEdit] = useState(false)
  const [isDraggable, setIsDraggable] = useState(true)

  const editTodo = () => {
    if (isEdit) {
      fetch(`http://localhost:3000/todo/${todo.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: inputValue }),
      })
        .then((res) => res.json())
        .then(() => {
          dispatch({ type: "UPDATE_TODO", payload: { id: todo.id, updates: { content: inputValue } } })
          setIsEdit(false)
        })
        .catch((error) => {
          console.error("수정 실패:", error)
        })
    } else {
      setInputValue(todo.content)
      setIsEdit(true)
    }
  }

  return (
    <li
      className={`flex justify-start items-center gap-[10px] p-[13px] text-[#1e1e1e] rounded-[15px] ${todo.completed ? "bg-[#A6A6A6]" : "bg-white"}`}
      draggable={isDraggable}
      onDragStart={() => handleDragStart(index)}
      onDragOver={(e) => handleDragOver(index, e)}
      onDragEnd={handleDrop}
    >
      <CheckBox todo={todo} />
      {todo.completed ? <del className="mr-auto">{todo.content}</del> : <span className="mr-auto">{todo.content}</span>}
      {isEdit && (
        <input
          className="outline-none border-none rounded-[10px] bg-[#d4d4d4] p-[10px] text-[#1e1e1e]"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={(e) => e.key === "Enter" && editTodo()}
        />
      )}
      <button className="btn bg-[#d1d1d1] text-[#1e1e1e] text-sm" onClick={editTodo}>
        {isEdit ? "저장" : "수정"}
      </button>
      <button
        className="btn bg-[#d1d1d1] text-[#1e1e1e] text-sm"
        onClick={() => {
          fetch(`http://localhost:3000/todo/${todo.id}`, {
            method: "DELETE",
          })
            .then((res) => {
              if (res.ok)
                dispatch({
                  type: "DELETE_TODO",
                  payload: { id: todo.id },
                })
            })
            .catch((error) => {
              console.error("삭제 실패:", error)
            })
        }}
      >
        삭제
      </button>
      <div
        className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600 px-1"
        onMouseEnter={() => setIsDraggable(true)}
        onMouseLeave={() => setIsDraggable(false)}
        title="드래그하여 순서 변경"
      >
        ⠿
      </div>
    </li>
  )
})

export default Todo

import { useState } from "react"
import { useTodoDispatch, useTodoList } from "../context/TodoContext"

export const useSortList = (filterTodos) => {
  const [draggingIndex, setDraggingIndex] = useState(null)

  const todos = useTodoList()
  const dispatch = useTodoDispatch()

  // 드래그 시작
  const handleDragStart = (index) => {
    setDraggingIndex(index)
  }

  // 드래그 중 (순서 변경)
  const handleDragOver = (index, e) => {
    e.preventDefault()
    if (index !== draggingIndex) {
      const newTodos = [...todos]
      const draggingItem = newTodos[draggingIndex]

      newTodos.splice(draggingIndex, 1)
      newTodos.splice(index, 0, draggingItem)

      dispatch({ type: "INIT_TODOS", payload: newTodos })
      if (filterTodos) filterTodos()
      setDraggingIndex(index)
    }
  }

  // 드래그 종료
  const handleDrop = () => {
    setDraggingIndex(null)
  }

  return { handleDragStart, handleDragOver, handleDrop }
}

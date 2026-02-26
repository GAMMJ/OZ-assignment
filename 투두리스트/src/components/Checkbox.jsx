import { useTodoDispatch } from "../context/TodoContext"

const CheckBox = ({ todo }) => {
  const dispatch = useTodoDispatch()

  return (
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={todo.completed}
      onChange={() => {
        fetch(`http://localhost:3000/todo/${todo.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ completed: !todo.completed }),
        }).then(() => {
          dispatch({
            type: "TOGGLE_COMPLETE",
            payload: { id: todo.id },
          })
        })
      }}
    />
  )
}

export default CheckBox

const todoReducer = (state, action) => {
  switch (action.type) {
    case "INIT_TODOS":
      return action.payload
    case "ADD_TODO":
      return [...state, action.payload]
    case "UPDATE_TODO":
      return state.map((todo) => (todo.id === action.payload.id ? { ...todo, ...action.payload.updates } : todo))
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id)
    case "TOGGLE_COMPLETE":
      return state.map((todo) => (todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo))
    default:
      return state
  }
}

export default todoReducer

 const TodoReducer = (state, action) => { 
  debugger
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload ]};
    case "UPDATE_TODO":
      return { ...state, todos: state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
      )};
    case "DELETE_TODO":     
      return { ...state, todos: state.todos.filter(todo => todo.id!==action.payload) };
      
    default:
      return { ...state };
  }
};

export default TodoReducer;

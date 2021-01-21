const initialState ={
  data: []
}

const todo = (state = initialState, action) =>{
  switch(action.type){
    case "ADD_TODO":
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: action.id,
            message: action.content,
            completed: false
          },
        ],
      };
    case "DELETE_TODO":
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== action.id)
      };

    case "EDIT_TODO":
      return {
        ...state,
        data: state.data.map(todo => todo.id === action.id ?
          {
           ...todo,
           message: action.content,
           completed: action.isCompleted
          } : todo )
      };
    default:
      return state;
  }
};

export default todo;
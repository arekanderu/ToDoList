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
           message: action.content
          } : todo )
      };
    default:
      return state;
  }
};

export default todo;
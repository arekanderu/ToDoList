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
      const id = action.id;
      const message = action.content
      const todoid = state.id
      return {
        ...state,
        data: state.data.map(todo => todo.id === action.id ?
          {
           ...todo,
           message: action.content
          } : todo )

        // [id]: {
        //   ...state[id],
        //   message: action.content,
        // }
      };
    default:
      return state;
  }
};

export default todo;
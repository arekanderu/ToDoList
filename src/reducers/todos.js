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
            message: action.content,
            id: action.id,
          },
        ],
      };
    case "DELETE_TODO":
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== action.id)
      };
    default:
      return state;
  }
};

export default todo;
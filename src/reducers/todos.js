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
      return {};
    default:
      return state;
  }
};

export default todo;
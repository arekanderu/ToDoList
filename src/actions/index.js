let counter = 0;

const ADD_TODO = "ADD_TODO";
export const addTodo = (text) => {
  return{
    type: ADD_TODO,
    id: Math.random(),
    content: text
  };
};


let counter = 0;

const ADD_TODO = "ADD_TODO";
export const addTodo = (text) => {
  return{
    type: ADD_TODO,
    id: counter++,
    content: text,
    completed: false
  };
};

const DELETE_TODO = "DELETE_TODO";
export const deleteTodo = (id) => {
  return{
    type: DELETE_TODO,
    id,
  };
};

const EDIT_TODO = "EDIT_TODO";
export const editTodo = (id, text, isCompleted) =>{
  return{
    type: EDIT_TODO,
    id,
    content: text,
    completed: isCompleted
  }
}


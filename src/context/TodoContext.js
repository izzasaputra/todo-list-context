import React, { createContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const onInputChange = (event) => {
    setInput(event.target.value);
    console.log(event);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    if(editTodo){
        setTodos(todos.map((todo)=>todo.id===editTodo.id?{...todo, title:input}: todo));
        setEditTodo(null);
    }else{
        setTodos([...todos, { id: uuidV4(), title: input, completed: false }]);
    }
    setInput("");
  };
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = (todo)=>{
    setEditTodo(todo);
    setInput(todo.title);
  }
  const handleStatus = ({id})=>{
    setTodos(todos.map((todo)=>todo.id===id?{...todo, completed: !todo.completed}:todo))
  }

  return (
    <TodoContext.Provider
      value={{ input, todos, onFormSubmit, handleDelete, onInputChange, handleEdit, handleStatus, editTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

import React, { useState } from "react";
import TodosList from "./components/TodosList";
import SearchBar from "./components/SearchBar";
import "./index.css";
import Header from "./Header";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [term, setTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  let id = Math.floor(Math.random() * 10000);

  const addTodoHandler = (text) => {
    const date = new Date().toLocaleDateString();
    const newTodo = {
      date: date,
      text,
      id: id,
    };

    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
  };

  const deleteTodoHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <div className={`container ${darkMode && "dark-mode"}`}>
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      {todos.length > 0 && <SearchBar term={term} setTerm={setTerm} />}
      <TodosList
        todos={todos.filter((todo) => todo.text.toLowerCase().includes(term))}
        addTodoHandler={addTodoHandler}
        deleteTodoHandler={deleteTodoHandler}
      />
    </div>
  );
};

export default App;

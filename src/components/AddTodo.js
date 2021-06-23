import React, { useState } from "react";

function AddTodo({ addTodoHandler }) {
  const [todoText, setTodoText] = useState("");
  let charLimit = 100;

  const onTextareaChange = (e) => {
    if (charLimit - e.target.value.length > -1) {
      setTodoText(e.target.value);
    }
  };

  const handleSaveClick = () => {
    if (todoText.trim().length > 0) {
      addTodoHandler(todoText);
      setTodoText("");
    }
  };

  return (
    <div className="todo new-todo">
      <textarea
        cols="3"
        rows="3"
        placeholder="Add your todo here"
        value={todoText}
        onChange={onTextareaChange}
      ></textarea>
      <div className="todo-footer">
        <small>{charLimit - todoText.length} characters remaining</small>
        <button className="btn save-btn" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddTodo;

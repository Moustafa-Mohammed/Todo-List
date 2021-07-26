import React from "react";

const Todo = ({ text, date, id, deleteTodoHandler }) => {
  return (
    <div className="todo">
      <span className="todo-text">{text}</span>
      <div className="todo-footer">
        <small><span className="span">added at:</span> {date}</small>
        <div className="todo-btns">
 
          <button
            className="btn delete-btn"
            onClick={() => deleteTodoHandler(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;

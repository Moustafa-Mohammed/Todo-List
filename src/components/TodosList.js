import React from "react";
import Todo from "./Todo";

function TodosList({ todos, addTodoHandler, deleteTodoHandler }) {
  return (
    <div className="todos-list">

      {todos.map((todo) => {
        return (
          <Todo
            text={todo.text}
            date={todo.date}
            id={todo.id}
            deleteTodoHandler={deleteTodoHandler}
          />
        );
      })}
    </div>
  );
}

export default TodosList;

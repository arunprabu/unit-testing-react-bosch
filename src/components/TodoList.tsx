import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => {
        if (response.status === 200 || response.ok) {
          return response.json();
        } else {
          throw new Error(`HTTP error status: ${response.status}`);
        }
      })
      .then((jsonData) => {
        setTodos(jsonData);
      });
  }, []);

  return (
    <div style={{ textAlign: "left", padding: "20px" }}>
      <h2 data-testid="h2El">Todos</h2>
      {todos.map((todo) => {
        return (
          <div
            role="listitem"
            style={{ backgroundColor: "lightyellow" }}
            key={todo.id}
          >
            <span>#{todo.id}</span>
            <h3>{todo.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;

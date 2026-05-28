"use client";

import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoPage() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editId, setEditId] = useState<number | null>(
    null
  );

  const addOrUpdateTodo = () => {
    if (task.trim() === "") return;

    // Edit
    if (editId !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId
            ? { ...todo, text: task }
            : todo
        )
      );

      setEditId(null);
    } else {
      // Add
      const newTodo = {
        id: Date.now(),
        text: task,
        completed: false,
      };

      setTodos([...todos, newTodo]);
    }

    setTask("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  };

  const editTodo = (id: number) => {
    const todo = todos.find(
      (todo) => todo.id === id
    );

    if (todo) {
      setTask(todo.text);
      setEditId(id);
    }
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) =>
          setTask(e.target.value)
        }
      />

      <button onClick={addOrUpdateTodo}>
        {editId !== null ? "Update" : "Add"}
      </button>

      <hr />

      {todos.map((todo) => (
        <div key={todo.id}>
          <span
            onClick={() =>
              toggleTodo(todo.id)
            }
            style={{
              cursor: "pointer",
              textDecoration:
                todo.completed
                  ? "line-through"
                  : "none",
            }}
          >
            {todo.completed ? "✅" : "⬜"}{" "}
            {todo.text}
          </span>

          <button
            onClick={() =>
              editTodo(todo.id)
            }
          >
            Edit
          </button>

          <button
            onClick={() =>
              deleteTodo(todo.id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
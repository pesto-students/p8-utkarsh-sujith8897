import React, { useState } from "react";
import "./Todo.style.css";

const TODO_LIST = [
  {
    task: "Sample Test One",
    isCompleted: false,
  },
  {
    task: "Sample Test Two",
    isCompleted: false,
  },
  {
    task: "Sample Test Three",
    isCompleted: false,
  },
  {
    task: "Sample Test Four",
    isCompleted: false,
  },
];

function compare(a, b) {
  if (a.isCompleted) {
    return 1;
  }
  return -1;
}

export const Todo = () => {
  const [todoList, setTodoList] = useState(TODO_LIST);
  const [task, setTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!task.length) return alert("Task cannot be empty");
    setTodoList([{ task, isCompleted: false }, ...todoList]);
    setTask("");
  };

  const handleTaskCompleted = (index) => {
    let updatedList = [...todoList];
    updatedList[index].isCompleted = !updatedList[index].isCompleted;
    console.log({ index, updatedList });
    setTodoList(updatedList);
  };

  return (
    <div>
      <div className="add-container">
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            placeholder="Enter your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div>
        {todoList?.sort?.(compare)?.map?.((todo, index) => (
          <div
            key={index}
            className="task"
            onClick={() => handleTaskCompleted(index)}
          >
            <input
              type="checkbox"
              checked={todo?.isCompleted}
              onClick={() => handleTaskCompleted(index)}
            />
            <label
              style={{
                textDecoration: todo?.isCompleted ? "line-through" : "none",
                color: todo?.isCompleted ? "#666" : "#444",
              }}
            >
              {todo?.task}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

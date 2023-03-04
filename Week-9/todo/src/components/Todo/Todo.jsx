import React, { useState } from "react";
import "./Todo.style.css";
import { SortableItem } from "../../SortableItem";

function compare(a, b) {
  if (a.isCompleted) {
    return 1;
  }
  return -1;
}

export const Todo = (props) => {
  const [task, setTask] = useState("");
  const { todoList, handleTaskCompleted, handleAddTask } = props;

  // console.log({ handleTaskCompleted });

  const handleAdd = (e) => {
    e.preventDefault();
    if (!task.length) return alert("Task cannot be empty");
    handleAddTask(task);
    setTask("");
  };

  const handleComp = (index) => {
    console.log({ index });
    handleTaskCompleted(index);
  };

  return (
    <div>
      <div className="add-container">
        <form onSubmit={handleAdd}>
          <input
            type="text"
            placeholder="Enter your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {todoList
          ?.sort?.(compare)
          // ?.slice?.(0, 1)
          ?.map?.((todo, index) => (
            <SortableItem
              key={index}
              index={todo?.id}
              handleTaskCompleted={handleComp}
              todo={todo}
            />
          ))}
      </div>
    </div>
  );
};

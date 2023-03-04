import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.index });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const { handleTaskCompleted, todo, index } = props;

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className="task">
        <input
          type="checkbox"
          checked={todo?.isCompleted}
          onChange={() => handleTaskCompleted(index)}
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
    </div>
  );
}

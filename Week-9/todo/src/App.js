import React, { useState } from "react";
import "./App.css";
import { Todo } from "./components/Todo/Todo";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const TODO_LIST = [
  {
    task: "Sample Test One",
    isCompleted: false,
    id: 0,
  },
  {
    task: "Sample Test Two",
    isCompleted: false,
    id: 1,
  },
  {
    task: "Sample Test Three",
    isCompleted: false,
    id: 2,
  },
  {
    task: "Sample Test Four",
    isCompleted: false,
    id: 3,
  },
];

function App() {
  const [todoList, setTodoList] = useState(TODO_LIST);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleAddTask = (task) => {
    setTodoList([
      { task, isCompleted: false, id: todoList.length },
      ...todoList,
    ]);
  };

  const handleTaskCompleted = (index) => {
    console.log({ index });
    let updatedList = [...todoList];
    updatedList[index].isCompleted = !updatedList[index].isCompleted;
    setTodoList(updatedList);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="App">
        <SortableContext
          items={todoList}
          strategy={verticalListSortingStrategy}
        >
          <Todo
            todoList={todoList}
            handleAddTask={handleAddTask}
            handleTaskCompleted={handleTaskCompleted}
          />
        </SortableContext>
      </div>
    </DndContext>
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setTodoList((todoList) => {
        const oldIndex = todoList.findIndex((item) => item.id === active.id);
        const newIndex = todoList.findIndex((item) => item.id === over.id);

        return arrayMove(todoList, oldIndex, newIndex);
      });
    }
  }
}

export default App;

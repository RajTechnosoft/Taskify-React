import React, { useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";
// variable for Local Storage
const todosKey = "reactTodo";
//
function Todo() {
  // funtion of getting data from the local storage
  const getLocalStorageData = () => {
    const rowTodos = localStorage.getItem(todosKey);
    if (!rowTodos) return [];
    return JSON.parse(rowTodos);
  };
  //here the task is the container of all the details of a task
  const [task, setTask] = useState(() => getLocalStorageData());
  // here handleFormSubmit function check validation and add data in the task array
  const handleFormSubmit = (inputValue, setInputValue) => {
    const { id, content, checked } = inputValue;
    console.log("i am content" + checked);
    if (!content) {
      alert("Please Enter Any Task");
      setInputValue({ id: "", content: "", checked: false });
      return;
    }
    const ifContentMatch = task.find((task) => task.content === content);
    if (ifContentMatch) {
      return;
    }
    setTask((prev) => [...prev, { id, content, checked }]);
    setInputValue({ id: "", content: "", checked: false });
  };
  // delete an element functionality
  const handleDeleteBtn = (item) => {
    const updateTask = task.filter((task) => !(task.content === item));
    setTask(updateTask);
  };
  //delete all functionality
  const handleDeleteAllBtn = () => {
    setTask([]);
  };
  // handle complete task functionality
  const handleCompleteTask = (data) => {
    console.log(task);
    console.log(data);
    const updateTask = task.map((item) => {
      if (item.content === data) {
        console.log(item);
        return { ...item, checked: !item.checked };
      } else {
        return item;
      }
    });
    // here we are updating the whole task
    setTask(updateTask);
  };

  // add data to local storage
  localStorage.setItem(todosKey, JSON.stringify(task));

  //   here starts the return
  return (
    <div className="Todo">
      <header>
        <h1>Todo List</h1>
        {/* date */}
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section>
        <ul>
          {task.map((item) => {
            return (
              <TodoList
                key={item.id}
                data={item.content}
                onHandleDeleteTodo={handleDeleteBtn}
                checked={item.checked}
                handleCompleteTask={handleCompleteTask}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="ClearAllbtn" onClick={() => handleDeleteAllBtn()}>
          Clear All
        </button>
      </section>
    </div>
  );
}

export default Todo;

import React from "react";
import { useState } from "react";
import "./Dashboard.css";
import "./fluid.css";
import Header from "./Header";
import Navbar from "./Navbar";
import TodoList from "./TodoList";
const todosKey = "reactTodo";
import { IoIosAddCircle } from "react-icons/io";
function Dashboard() {
  // funtion of getting data from the local storage
  const getLocalStorageData = () => {
    const rowTodos = localStorage.getItem(todosKey);
    if (!rowTodos) return [];
    return JSON.parse(rowTodos);
  };
  //here the task is the container of all the details of a task
  const [task, setTask] = useState(() => getLocalStorageData());

  // here handleFormSubmit function check validation and add data in the task array
  const handleFormSubmit = (
    inputValue,
    setInputValue,
    disc,
    setDisc,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    priority,
    setPriority,
    category,
    setCategory
  ) => {
    const { id, content, checked } = inputValue;
    console.log("i am content" + checked);
    if (!content) {
      alert("Please Enter Any Task");
      setInputValue({
        id: "",
        content: "",
        checked: false,
      });
      setDisc("");
      setStartDate("");
      setEndDate("");
      setPriority("");
      setCategory("");
      return;
    }
    const ifContentMatch = task.find((task) => task.content === content);
    if (ifContentMatch) {
      return;
    }
    setTask((prev) => [
      ...prev,
      {
        id,
        content,
        checked,
        disc,
        startDate,
        endDate,
        priority,
        category,
      },
    ]);
    setInputValue({
      id: "",
      content: "",
      checked: false,
    });
    setDisc("");
    setStartDate("");
    setEndDate("");
    setPriority("");
    setCategory("");
    alert("Task Added");
  };
  // delete an element functionality
  const handleDeleteBtn = (item) => {
    const updateTask = task.filter((task) => !(task.content === item));
    setTask(updateTask);
    alert("Task Deleted");
  };
  //delete all functionality
  const handleDeleteAllBtn = () => {
    let dltall = confirm("Do you really want to delete all tasks?");
    if (!dltall) {
      return;
    } else {
      setTask([]);
    }
  };
  // handle complete task functionality
  const handleCompleteTask = (data) => {
    const updateTask = task.map((item) => {
      if (item.content === data) {
        if (item.checked) {
          alert(`${data} Task marked as Incomplete`);
        } else {
          alert(`${data} Task completed`);
        }
        return { ...item, checked: !item.checked };
      } else {
        return item;
      }
    });
    // here we are updating the whole task
    setTask(updateTask);
  };
  // add task

  // add data to local storage
  localStorage.setItem(todosKey, JSON.stringify(task));
  //

  const [hide, setHide] = useState(true);

  const HideAddTaskForm = () => {
    if (hide) {
      setHide(false);
    } else {
      setHide(true);
    }
  };
  //   here starts the return
  return (
    <div className="Dashboard">
      <Header />
      <div className="container">
        <Navbar
          handleFormSubmit={handleFormSubmit}
          HideAddTaskForm={HideAddTaskForm}
          hide={hide}
        />
        <div className="Content">
          <section className="TaskHeader">
            <span>My Tasks</span>
            <span className="addTaskBtn" onClick={() => HideAddTaskForm()}>
              <IoIosAddCircle />
            </span>
          </section>
          <section className="TaskContainer">
            {task.map((item) => {
              return (
                <TodoList
                  key={item.id}
                  data={item.content}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  disc={item.disc}
                  priority={item.priority}
                  category={item.category}
                  onHandleDeleteTodo={handleDeleteBtn}
                  checked={item.checked}
                  handleCompleteTask={handleCompleteTask}
                  handleFormSubmit={handleFormSubmit}
                  task={task}
                  setTask={setTask}
                />
              );
            })}
            <section>
              <button
                className="ClearAllbtn"
                onClick={() => handleDeleteAllBtn()}
              >
                Clear All
              </button>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

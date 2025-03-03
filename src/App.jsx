import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Components/Todo";
import Dashboard from "./Components/Dashboard";
import { createBrowserRouter } from "react-router-dom";
import TodoForm from "./Components/TodoForm";
import MyForm from "./Components/MyForm";
import UpdateTask from "./Components/UpdateTask";

function App() {
  return (
    <>
      {/* <MyForm /> */}
      <Dashboard />
      {/* <UpdateTask /> */}
    </>
  );
}

export default App;

import React from "react";
import TodoForm from "./TodoForm";
import "./Navbar.css";

import { useState } from "react";
function Navbar({ handleFormSubmit, HideAddTaskForm, hide }) {
  return (
    <div className={hide ? "Navbar show " : "Navbar hide "}>
      <TodoForm
        onAddTodo={handleFormSubmit}
        HideAddTaskForm={HideAddTaskForm}
      />
    </div>
  );
}
//
export default Navbar;

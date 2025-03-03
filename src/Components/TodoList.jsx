import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import UpdateTask from "./UpdateTask";
function TodoList({
  key,
  data,
  startDate,
  endDate,
  disc,
  priority,
  category,
  onHandleDeleteTodo,
  checked,
  handleCompleteTask,
  handleFormSubmit,
  task,
  setTask,
}) {
  // const handleUpdateTask = () => {
  //   handleFormSubmit();
  //   onHandleDeleteTodo();
  // };
  console.log(data);
  console.log("res from todolist " + checked);
  // functionality of update task form

  return (
    <>
      {/* <UpdateTask
        hide={hide}
        HideUpdateForm={HideUpdateForm}
        key={key}
        data={data}
        startDate={startDate}
        endDate={endDate}
        disc={disc}
        priority={priority}
        category={category}
        task={task}
        setTask={setTask}
      /> */}
      <div
        className="SingleTask"
        style={
          checked
            ? { backgroundColor: "#76FF7A" }
            : { backgroundColor: "white" }
        }
      >
        <div className="TaskTitle">{data}</div>
        <div className="TaskDisc">{disc}</div>
        <ul className="TaskDetails">
          <li className="Category">{category}</li>
          <li className={priority == "High Priority" ? "Priority" : "green"}>
            {priority}
          </li>
          <li className="StartDate">Start: {startDate}</li>
          <li className="EndDate"> End: {endDate}</li>
        </ul>
        <div className="btns">
          <button
            className="TaskDoneBtn"
            onClick={() => handleCompleteTask(data)}
          >
            <FaCheckCircle />
          </button>
          {/* <button
            className="TaskEditBtn"
            onClick={() =>
              HideUpdateForm(
                key,
                data,
                startDate,
                endDate,
                disc,
                priority,
                category,
                onHandleDeleteTodo,
                checked,
                handleCompleteTask
              )
            }
          >
            <FaEdit />
          </button> */}
          <button
            className="TaskDltBtn"
            onClick={() => onHandleDeleteTodo(data)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoList;

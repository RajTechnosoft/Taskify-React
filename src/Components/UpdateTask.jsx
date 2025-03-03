import React, { useState } from "react";
import "./UpdateTask.css";
function UpdateTask({
  HideUpdateForm,
  hide,
  key,
  data,
  startDate,
  endDate,
  disc,
  priority,
  category,
  task,
  setTask,
}) {
  console.log("i am from updateTask form" + task);
  const handleChangeValue = (value) => {};
  return (
    <div>
      <section>
        <form
        //   onSubmit={handleFormSubmit}
        >
          <div className="form-content">
            <h2>Add Task</h2>
            <input
              required
              placeholder="Enter Task Title"
              type="text"
              className="input"
              autoFocus
              autoComplete="false"
              value={data || ""}
              // onChange={(event) => handleChangeValue(event.target.value)}
            />{" "}
            <br />
            <textarea
              name="TaskDiscription"
              required
              id="TaskDiscription"
              rows={6}
              value={disc}
              // onChange={(event) => handleSetdisc(event.target.value)}
              placeholder="Enter Your Task Discription"
            ></textarea>
            <br />
            <div className="selects">
              <select
                name="Category"
                id=""
                required
                value={category}
                //   onChange={(event) => handleSetCategory(event.target.value)}
              >
                <option value="" disabled selected>
                  --: Please Select Category :--
                </option>
                <option value="Office Task">Office Task</option>
                <option value="Learning Task">Learning Task</option>
                <option value="House Work">House Work</option>
              </select>

              <select
                name=""
                id=""
                required
                value={priority}
                //   onChange={(event) => handleSetPriority(event.target.value)}
              >
                {" "}
                <option value="" disabled selected>
                  --: Please Select Priority :--
                </option>
                <option value="High Priority">High Priority</option>
                <option value="Middle Priority">Middle Priority</option>
                <option value="Low Priority">Low Priority</option>
              </select>
            </div>
            <br />
            <div className="Timings">
              <div className="startTimeDiv">
                <p>Starting Date</p>
                <input
                  type="datetime-local"
                  name=""
                  id=""
                  value={startDate}
                  required
                  // onChange={(event) => handleSetStartDate(event.target.value)}
                />{" "}
              </div>
              <div className="EndTimeDiv">
                <p>Ending Date</p>
                <input
                  type="datetime-local"
                  name=""
                  id=""
                  value={endDate}
                  required
                  // onChange={(event) => handleSetEndDate(event.target.value)}
                />{" "}
              </div>
            </div>
            <br />
            <div className="FormBtns">
              <button
                type="reset"
                className="TaskSubmitBtn red"
                onClick={HideUpdateForm}
              >
                Cancel
              </button>
              <button type="submit" className="TaskSubmitBtn">
                Add Task
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default UpdateTask;

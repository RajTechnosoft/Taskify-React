import React, { useState } from "react";

function MyForm() {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedDateTime, setSelectedDateTime] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleDateTimeChange = (event) => {
    setSelectedDateTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Value:", selectedValue);
    console.log("Selected DateTime:", selectedDateTime);
    // Perform actions with the data, like sending it to an API
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="mySelect">Select an option:</label>
          <select
            id="mySelect"
            value={selectedValue}
            onChange={handleSelectChange}
          >
            <option value="">--Please choose an option--</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        <div>
          <label htmlFor="myDateTime">Select date and time:</label>
          <input
            type="datetime-local"
            id="myDateTime"
            value={selectedDateTime}
            onChange={handleDateTimeChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      <div className="output">
        <p>{selectedDateTime}</p>
        <p>{selectedValue}</p>
      </div>
    </>
  );
}

export default MyForm;

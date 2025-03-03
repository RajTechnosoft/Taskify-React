import React, { useEffect, useState } from "react";

function TodoDate() {
  const [dateTime, setDateTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formateDate = now.toLocaleDateString();
      const formateTime = now.toLocaleTimeString();
      setDateTime(`${formateDate} - ${formateTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return <h3>{dateTime}</h3>;
}

export default TodoDate;

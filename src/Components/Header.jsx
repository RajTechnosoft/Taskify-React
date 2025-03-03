import React from "react";
import TodoDate from "./TodoDate";

function Header() {
  return (
    <section className="Header">
      <div className="leftHeader">Taskify</div>
      <div className="RightHeader">
        <TodoDate />
      </div>
    </section>
  );
}

export default Header;

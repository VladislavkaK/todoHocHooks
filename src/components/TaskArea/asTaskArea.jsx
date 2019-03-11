import React from "react";
import Input from "../Input";
import TaskList from "../TaskList";

const asTaskArea = () => {
  return (
    <div className="TaskArea col-6">
      <Input />
      <TaskList />
    </div>
  );
};

export default asTaskArea;

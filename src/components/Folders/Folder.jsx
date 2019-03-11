import React from "react";

const Folder = ({ folderName, onHandleSelected, selected }) => {
  let className = "Folder";

  if (selected === true) {
    className += " selected";
  }

  return (
    <div onClick={onHandleSelected} className={className}>
      {folderName}
    </div>
  );
};

export default Folder;

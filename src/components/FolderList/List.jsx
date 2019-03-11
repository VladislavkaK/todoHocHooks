import React from "react";
import Folders from "../Folders";

const List = ({ folders, currentFolder }) => {
  return (
    <div className="FolderList">
      <ul className="list-group">
        {folders.map((name, index) => {
          let selected = false;

          if (name === currentFolder) {
            selected = true;
          }

          return (
            <li
              key={index}
              className={`list-group-item FolderList__Folder--${index}`}
            >
              <Folders selected={selected} folderName={name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;

import React from "react";
import FolderList from "../FolderList";
import { MDBBtn } from "mdbreact";

const asLeftMenu = () => {
  return (
    <div className="LeftMenu col-4">
      <FolderList />

      <MDBBtn className="btn-default" outline color="info">
        Добавить категорию
      </MDBBtn>
    </div>
  );
};

export default asLeftMenu;

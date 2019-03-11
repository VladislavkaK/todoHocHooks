import React, { useEffect } from "react";
import { LeftMenu } from "../../components";
import { TaskArea } from "../../components";

const Container2 = props => {
  useEffect(() => {
    props.init();
  }, []); //передаем пустой массив в качестве второго аргумента, чтобы выполнился один раз вызов функции init() для получения данных

  return (
    <div className="row Container">
      <LeftMenu />

      <TaskArea />
    </div>
  );
};

export default Container2;

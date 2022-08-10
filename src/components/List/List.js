import React from "react";
import classes from "./List.module.scss";

const List = () => {
  return (
    <div className={classes.List}>
      <p>List Name</p>
      <span className={classes.Badge}>4</span>
    </div>
  );
};

export default List;

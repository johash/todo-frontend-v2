import React from "react";
import classes from "./List.module.scss";

const List = ({ listName }) => {
  return (
    <div className={classes.List}>
      <p>{listName}</p>
      <span className={classes.Badge}>4</span>
    </div>
  );
};

export default List;

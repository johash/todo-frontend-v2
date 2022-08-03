import React from "react";
import classes from "./TaskPane.module.scss";

import Task from "../Task/Task";
import { TextInput } from "@mantine/core";

const TaskPane = () => {
  return (
    <div className={classes.TaskPane}>
      <div className={classes.Header}>
        <span>Important</span>
      </div>
      <div className={classes.TaskArea}>
        <Task />
        <Task />
        <Task />
      </div>
      <div className={classes.InputContainer}>
        <TextInput
          placeholder="Try typing something.."
          variant="filled"
          size="md"
        />
      </div>
    </div>
  );
};

export default TaskPane;

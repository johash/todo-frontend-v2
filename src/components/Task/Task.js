import React from "react";
import classes from "./Task.module.scss";

import { Checkbox, ActionIcon } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";

const Task = () => {
  return (
    <div className={classes.Task}>
      <div className={classes.Left}>
        <Checkbox label="Take out the trash" radius="xl" />
        <span>Due date</span>
      </div>
      <div className={classes.Right}>
        <DatePicker
          className={classes.DatePicker}
          icon={<BsCalendarDate size={16} />}
        />
        <ActionIcon color="gray" variant="filled">
          <AiOutlineStar />
        </ActionIcon>
        <ActionIcon color="gray" variant="filled">
          <RiDeleteBin5Line />
        </ActionIcon>
      </div>
    </div>
  );
};

export default Task;

import React from "react";
import classes from "./Sidebar.module.scss";
import List from "../List/List";

import { AiOutlineStar, AiOutlineCalendar } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className={classes.Sidebar}>
      <div className={classes.Container}>
        <div className={classes.MainButtonContainer}>
          <button className={classes.MainButton}>
            <AiOutlineStar color="#D6A1AB" size={20} />
            <span>Important</span>
          </button>
          <button className={classes.MainButton}>
            <AiOutlineCalendar color="#699491" size={20} />
            <span>Planned</span>
          </button>
          <button className={classes.AllTasksButton}>
            <div className={classes.Content}>
              <FaTasks color="#D6A1AB" size={20} />
              <span>All Tasks</span>
            </div>
            <span className={classes.Badge}>10</span>
          </button>
        </div>
        <div className={classes.Lists}>
          <p>
            <FiMenu />
            <span>My Lists</span>
          </p>
          <hr />
          <div className={classes.ListContainer}>
            <List />
            <List />
          </div>
        </div>
      </div>

      <div className={classes.ListInput}>
        <div className={classes.Input}>
          <input placeholder="List name" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

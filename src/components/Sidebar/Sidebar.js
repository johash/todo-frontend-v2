import React, { useEffect, useState } from "react";
import classes from "./Sidebar.module.scss";
import List from "../List/List";

import { AiOutlineStar, AiOutlineCalendar } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

import { getAllLists, addList } from "../../app/features/list";
import { useDispatch, useSelector } from "react-redux";

import { showNotification } from "@mantine/notifications";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const loading = useSelector((state) => state.list.loading);
  const lists = useSelector((state) => state.list.lists);
  const [listName, setListName] = useState("");

  useEffect(() => {
    dispatch(getAllLists());
  }, []);

  const listNameChangeHandler = (e) => {
    setListName(e.target.value);
  };

  const onKeyupHandler = (e) => {
    if (e.keyCode === 13) {
      if (listName !== "") {
        dispatch(addList({ listName }));
        setListName("");
        dispatch(getAllLists());
      } else {
        showNotification({
          title: "List name cannot be empty",
          color: "orange",
        });
      }
    }
  };

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
            {lists.length > 0 ? (
              lists.map((list) => {
                return <List listName={list.listName} key={list._id} />;
              })
            ) : (
              <p>No Lists found</p>
            )}
          </div>
        </div>
      </div>

      <div className={classes.ListInput}>
        <div className={classes.Input}>
          <input
            placeholder="List name"
            value={listName}
            onChange={listNameChangeHandler}
            onKeyUp={onKeyupHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

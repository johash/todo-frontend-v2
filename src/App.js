import React, { useEffect } from "react";
import classes from "./App.module.scss";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import TaskPane from "./components/TaskPane/TaskPane";

import { tryAutoLogin } from "./app/features/auth";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      dispatch(tryAutoLogin());
    }
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={classes.Main}>
        <Sidebar />
        <TaskPane />
      </main>
    </>
  );
};

export default App;

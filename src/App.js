import React from "react";
import classes from "./App.module.scss";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import TaskPane from "./components/TaskPane/TaskPane";

const App = () => {
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

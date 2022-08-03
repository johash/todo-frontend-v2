import React, { useState } from "react";
import classes from "./Navbar.module.scss";

import { Avatar, Menu } from "@mantine/core";
import { AiOutlineLogout } from "react-icons/ai";

import RegisterModal from "../RegisterModal/RegisterModal";
import SignInModal from "../SignInModal/SignInModal";

const Navbar = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const registerModalCloseHandler = () => {
    setIsRegisterModalOpen(false);
  };

  const registerModalOpenHandler = () => {
    setIsSignInModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const signInModalOpenHandler = () => {
    setIsRegisterModalOpen(false);
    setIsSignInModalOpen(true);
  };

  const signInModalCloseHandler = () => {
    setIsSignInModalOpen(false);
  };

  return (
    <nav className={classes.Navbar}>
      <div className={classes.Container}>
        <div className={classes.LogoContainer}>
          <img src="/assets/todo-logo.png" alt="todo app logo" />
        </div>
        <div className={classes.Avatar}>
          {isLoggedIn ? (
            <Menu>
              <Menu.Target>
                <Avatar radius="xl">JP</Avatar>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item icon={<AiOutlineLogout size={14} />}>
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          ) : (
            <Avatar radius="xl" onClick={registerModalOpenHandler} />
          )}
        </div>
      </div>
      <RegisterModal
        opened={isRegisterModalOpen}
        registerModalCloseHandler={registerModalCloseHandler}
        openSignInModal={signInModalOpenHandler}
      />
      <SignInModal
        opened={isSignInModalOpen}
        signInModalCloseHandler={signInModalCloseHandler}
        openRegisterModal={registerModalOpenHandler}
      />
    </nav>
  );
};

export default Navbar;

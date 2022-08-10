import React, { useState } from "react";
import classes from "./Navbar.module.scss";

import { Avatar, Menu } from "@mantine/core";
import { AiOutlineLogout } from "react-icons/ai";

import RegisterModal from "../RegisterModal/RegisterModal";
import SignInModal from "../SignInModal/SignInModal";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../app/features/auth";

const Navbar = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

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
          {isUserLoggedIn ? (
            <Menu>
              <Menu.Target>
                <Avatar radius="xl">
                  {user.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </Avatar>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  icon={<AiOutlineLogout size={14} />}
                  onClick={() => dispatch(logout())}
                >
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

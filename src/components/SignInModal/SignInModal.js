import React from "react";
import classes from "./SignInModal.module.scss";

import { Modal } from "@mantine/core";
import { TextInput } from "@mantine/core";
import { Button } from "@mantine/core";

const SignInModal = ({
  opened,
  signInModalCloseHandler,
  openRegisterModal,
}) => {
  return (
    <>
      <Modal
        opened={opened}
        onClose={signInModalCloseHandler}
        title="Login"
        centered
      >
        <form>
          <div className={classes.InputGroup}>
            <TextInput
              placeholder="johndoe@example.com"
              label="Email Address"
              required
              type="email"
            />
            <TextInput
              placeholder="Strong password"
              label="Password"
              required
              type="password"
            />
          </div>
          <div className={classes.LoginButton}>
            <span>
              Don't have an account? <b onClick={openRegisterModal}>Register</b>
            </span>
            <Button radius="md" color="violet">
              Login
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default SignInModal;

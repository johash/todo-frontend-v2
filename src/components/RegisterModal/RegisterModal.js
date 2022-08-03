import React, { useState } from "react";
import classes from "./RegisterModal.module.scss";

import { Modal } from "@mantine/core";
import { TextInput } from "@mantine/core";
import { Button } from "@mantine/core";

const RegisterModal = ({
  opened,
  registerModalOpenHandler,
  registerModalCloseHandler,
  openSignInModal,
}) => {
  return (
    <>
      <Modal
        opened={opened}
        onClose={registerModalCloseHandler}
        title="Register"
        centered
      >
        <form>
          <div className={classes.InputGroup}>
            <TextInput placeholder="Your name" label="Full name" required />
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
          <div className={classes.RegisterButton}>
            <span>
              Already have an account? <b onClick={openSignInModal}>Sign In</b>
            </span>
            <Button radius="md" color="violet">
              Register
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default RegisterModal;

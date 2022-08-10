import React, { useEffect } from "react";
import classes from "./SignInModal.module.scss";

import { Modal } from "@mantine/core";
import { TextInput } from "@mantine/core";
import { Button } from "@mantine/core";

import { useFormik } from "formik";
import { authLogin } from "../../app/features/auth";

import { useSelector, useDispatch } from "react-redux";

const SignInModal = ({
  opened,
  signInModalCloseHandler,
  openRegisterModal,
}) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const isLoginError = useSelector((state) => state.auth.isLoginError);

  const formik = useFormik({
    initialValues: {
      loginEmail: "",
      loginPassword: "",
    },
    onSubmit: (data) => {
      dispatch(authLogin(data));
    },
  });

  useEffect(() => {
    if (isLoginError) {
      formik.resetForm();
      return;
    }
    if (!loading) {
      formik.resetForm();
      signInModalCloseHandler();
    }
  }, [isLoginError, loading]);

  return (
    <>
      <Modal
        opened={opened}
        onClose={signInModalCloseHandler}
        title="Login"
        centered
      >
        <form onSubmit={formik.handleSubmit}>
          <div className={classes.InputGroup}>
            <TextInput
              placeholder="johndoe@example.com"
              label="Email Address"
              required
              type="email"
              id="loginEmail"
              name="loginEmail"
              value={formik.values.loginEmail}
              onChange={formik.handleChange}
            />
            <TextInput
              placeholder="Strong password"
              label="Password"
              required
              type="password"
              id="loginPassword"
              name="loginPassword"
              value={formik.values.loginPassword}
              onChange={formik.handleChange}
            />
          </div>
          <div className={classes.LoginButton}>
            <span>
              Don't have an account? <b onClick={openRegisterModal}>Register</b>
            </span>
            <Button radius="md" color="violet" type="submit" loading={loading}>
              Login
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default SignInModal;

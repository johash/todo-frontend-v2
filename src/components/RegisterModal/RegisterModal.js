import React, { useEffect } from "react";
import classes from "./RegisterModal.module.scss";
import { useFormik } from "formik";

import { Modal } from "@mantine/core";
import { TextInput } from "@mantine/core";
import { Button } from "@mantine/core";

import { useDispatch, useSelector } from "react-redux";
import { authRegister } from "../../app/features/auth";

const RegisterModal = ({
  opened,
  registerModalOpenHandler,
  registerModalCloseHandler,
  openSignInModal,
}) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const isRegisterError = useSelector((state) => state.auth.isRegisterError);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      dispatch(authRegister(data));
    },
  });

  useEffect(() => {
    if (isRegisterError) {
      formik.resetForm();
      return;
    }
    if (!loading) {
      formik.resetForm();
      registerModalCloseHandler();
    }
  }, [isRegisterError, loading]);

  return (
    <>
      <Modal
        opened={opened}
        onClose={registerModalCloseHandler}
        title="Register"
        centered
      >
        <form onSubmit={formik.handleSubmit}>
          <div className={classes.InputGroup}>
            <TextInput
              placeholder="Your name"
              label="Full name"
              required
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <TextInput
              placeholder="johndoe@example.com"
              label="Email Address"
              required
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <TextInput
              placeholder="Strong password"
              label="Password"
              required
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <div className={classes.RegisterButton}>
            <span>
              Already have an account? <b onClick={openSignInModal}>Sign In</b>
            </span>
            <Button radius="md" color="violet" type="submit" loading={loading}>
              Register
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default RegisterModal;

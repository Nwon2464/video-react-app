import React, { useState } from "react";
import { Link } from "react-router-dom";
import history from "../history";
import LoginModal from "./LoginModal";
import LoginModalForm from "./LoginModalForm";
import SignUpModal from "./SignUpModal";
import SignUpModalForm from "./SignUpModalForm";

import { Field, reduxForm } from "redux-form";
import { SubmissionError } from "redux-form";

const LoginSignUpButton = () => {
  const modalRef = React.useRef();

  const openLoginModal = () => {
    modalRef.current.openModal();
  };

  const signUpModalRef = React.useRef();

  const openSignUpModal = () => {
    signUpModalRef.current.openModal();
  };

  return (
    <>
      <button
        onClick={openLoginModal}
        className="header__icon smt__button__login ui button"
      >
        Log In
      </button>

      <LoginModal ref={modalRef}>
        <i
          onClick={() => modalRef.current.close()}
          className="window__icon large window close icon"
        ></i>
        <LoginModalForm />
      </LoginModal>
      <button
        onClick={openSignUpModal}
        style={{ marginRight: "5px" }}
        className="header__icon smt__button__signup ui button"
      >
        Sign Up
      </button>
      <SignUpModal ref={signUpModalRef}>
        <i
          onClick={() => signUpModalRef.current.close()}
          className="window__icon large window close icon"
        ></i>
        <SubmitValidationForm />
      </SignUpModal>
    </>
  );
};

const renderField = (props) => (
  <div className="field">
    <label>{props.label}</label>
    <div>
      <input {...props} />
      {props.touched && props.error && <span>{props.error}</span>}
    </div>
  </div>
);

const SubmitValidationForm = (props) => {
  const { error, handleSubmit, pristine, reset, submitting } = props;
  return (
    <>
      <form
        className="ui large form"
        style={{ top: "-4.3%" }}
        onSubmit={handleSubmit}
      >
        <div className="field">
          <Field
            name="username"
            label="Username"
            type="text"
            component={renderField}
            placeholder="Username"
          />
        </div>
        <div className="field">
          <Field
            label="Password"
            name="password"
            type="password"
            component={renderField}
            placeholder="Password"
          />
        </div>

        <div className="field">
          <Field
            label="Password"
            name="password"
            type="password"
            component={renderField}
            placeholder="Confirm Password"
          />
        </div>

        <div class="field">
          <Field
            label="Email"
            name="email"
            type="email"
            component={renderField}
            placeholder="Email"
          />
        </div>
        <div class="field">
          <label>Date of Birth</label>
          <Field name="Date of Birth" component="select">
            <option value="">Select</option>
            <option value="jan">January</option>
            <option value="feb">February</option>
            <option value="mar">March</option>
            <option value="apr">April</option>
            <option value="may">May</option>
            <option value="jun">June</option>
            <option value="jul">July</option>
            <option value="aug">August</option>
            <option value="sep">September</option>
            <option value="oct">October</option>
            <option value="nov">November</option>
            <option value="dec">December</option>
          </Field>
        </div>
        <div class="ui equal width form">
          <div class="fields">
            <div className="field">
              <Field
                label="Month"
                name="month"
                type="text"
                component={renderField}
                placeholder="Month"
              />
            </div>
            <div className="field">
              <Field
                label="Year"
                name="year"
                type="text"
                component={renderField}
                placeholder="Year"
              />
            </div>
          </div>
        </div>
        {error && <strong>{error}</strong>}

        <div class="inline field">
          <label>
            By Clicking Sign Up, you are indicating that you have read and
            acknowledge the{" "}
            <Link to="#" style={{ color: "#00b5ad" }}>
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link style={{ color: "#00b5ad" }} to="#">
              {" "}
              Privacy Notice
            </Link>
          </label>
        </div>

        <div
          style={{
            position: "relative",
            top: "11px",
          }}
        >
          <button
            style={{
              position: "relative",
              bottom: "3px",
              color: "white",
              backgroundColor: "#00b5ad",
            }}
            className="ui fluid medium button"
            type="submit"
            disabled={submitting}
          >
            Sign Up{" "}
          </button>
          <button
            className="ui fluid medium button"
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </div>
      </form>
    </>
  );
};
export default reduxForm({
  form: "submitValidation", // a unique identifier for this form
})(LoginSignUpButton);

// export default LoginSignUpButton;

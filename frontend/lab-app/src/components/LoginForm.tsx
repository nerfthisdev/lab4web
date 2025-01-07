import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const USER_REGEX = /^[a-zA-z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])/;

export function LoginForm() {
  const userRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [user, setUser] = useState("");
  const [validName, setValiName] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  const validateForm = () => {
    const usernameValid = USER_REGEX.test(user);
    const passwordValid = PWD_REGEX.test(password);
    userRef.current?.setCustomValidity(`${usernameValid ? "" : "invalid"}`);
    passwordRef.current?.setCustomValidity(`${passwordValid ? "" : "invalid"}`);

    formRef.current?.classList.remove("needs-validation");
    formRef.current?.classList.add("was-validated");

    return usernameValid && passwordValid;
  };

  function handleSubmit(event: React.SyntheticEvent) {
    event?.preventDefault();
    validateForm();
  }

  useEffect(() => {
    userRef?.current?.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValiName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPassword(result);
  }, [password]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: "20rem" }}>
        <form
          onSubmit={handleSubmit}
          className="needs-validation"
          ref={formRef}
          noValidate
        >
          <div className="form-floating mb-3">
            <input
              type="text"
              onChange={(e) => setUser(e.target.value)}
              className={`form-control`}
              id="username"
              ref={userRef}
              placeholder="username"
              required
            />
            <label htmlFor="username">Username</label>
            <div className="valid-feedback"></div>
            <div className="invalid-feedback">
              Username has to be 3-23 characters and contain no special
              characters except _{" "}
            </div>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="password"
              ref={passwordRef}
              placeholder="password"
            />
            <label htmlFor="password">Password</label>
            <div className="valid-feedback"></div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
          <p>
            <Link
              to="/signup"
              className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Sign-up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

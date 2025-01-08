import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const USER_REGEX = /^[a-zA-z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])/;

export const SignUpForm = () => {
  const userRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const matchPasswordRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [user, setUser] = useState("");
  const [validName, setValiName] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);

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
    const match = password === matchPassword;
    console.log(matchPassword);
    console.log("match: " + match);
    setValidMatch(match);
  }, [password, matchPassword]);

  const validateForm = () => {
    const usernameValid = USER_REGEX.test(user);
    const passwordValid = PWD_REGEX.test(password);
    const matchValid = validMatch;

    console.log("username: " + validName);
    console.log("password: " + validPassword);
    console.log("match password: " + validMatch);

    userRef.current?.setCustomValidity(`${usernameValid ? "" : "invalid"}`);
    passwordRef.current?.setCustomValidity(`${passwordValid ? "" : "invalid"}`);
    matchPasswordRef.current?.setCustomValidity(
      `${matchValid ? "" : "invalid"}`
    );

    formRef.current?.classList.remove("needs-validation");
    formRef.current?.classList.add("was-validated");

    return usernameValid && passwordValid && validMatch;
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event?.preventDefault();
    validateForm();
  };

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
              required
            />
            <label htmlFor="password">Password</label>
            <div className="valid-feedback"></div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              onChange={(e) => setMatchPassword(e.target.value)}
              className="form-control"
              id="passwordMatch"
              ref={matchPasswordRef}
              placeholder="passwordMatch"
              required
            />
            <label htmlFor="passwordMatch">Confirm password</label>
            <div className="valid-feedback"></div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Signup
          </button>
          <p>
            <Link
              to="/login"
              className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Already have an account?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

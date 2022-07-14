import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

import useStyles from "./UserSignupStyle";

const UserSignup = () => {
  const [isSigninClick, setIsSigninClick] = useState(true);
  const [isSignupClick, setIsSignupClick] = useState(false);

  const classes = useStyles({isSigninClick: isSigninClick, isSignupClick: isSignupClick});

  const handleToggle = (e) => {
    if (e.target.name === "Signin") {
      setIsSigninClick(true);
      setIsSignupClick(false);
    } else if (e.target.name === "Signup") {
      setIsSigninClick(false);
      setIsSignupClick(true);
    }
  };

  return (
    <div>
      <div className={classes.mainContainer}>
        <div className={classes.loginContainer}>
          <h1 className={classes.signTitle}>Hello!</h1>
          <h4 className={classes.signSubtitle}>
            Welcome Price Detective! Sign in or Sign up to catch sales!
          </h4>
          <div className={classes.sign_in_up_Container}>
            <button
              name="Signin"
              className={classes.signinTitleButton}
              onClick={handleToggle}
            >
              Sign In
            </button>
            <button
              name="Signup"
              className={classes.signupTitleButton}
              onClick={handleToggle}
            >
              Sign Up
            </button>
          </div>
          {/* Sign-in Page */}
          <div className={isSigninClick ? classes.signinContainer : classes.hideContainers}>
            <div className={classes.signinContent}>
              <div className={classes.inputContainer}>
                <TextField
                  className={classes.signinInputs}
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                />
              </div>
              <div className={classes.inputContainer}>
                <TextField
                  className={classes.signinInputs}
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                />
              </div>
              <div className={classes.forgorPassContainer}>
                <a href="#" className={classes.signinForgotPass}>
                  Forgot Password
                </a>
              </div>
              <Button
                className={classes.signinSubmitButton}
                color="primary"
                variant="contained"
                type="submit"
              >
                SIGN IN
              </Button>
            </div>
          </div>
          {/* Sign-up Page */}
          <div className={isSignupClick ? classes.signupContainer : classes.hideContainers}>
            <div className={classes.signinContent}>
            <div className={classes.inputContainer}>
                <TextField
                  className={classes.signinInputs}
                  id="outlined-basic"
                  label="Your Full Name"
                  variant="outlined"
                />
              </div>
              <div className={classes.inputContainer}>
                <TextField
                  className={classes.signinInputs}
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                />
              </div>
              <div className={classes.inputContainer}>
                <TextField
                  className={classes.signinInputs}
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                />
              </div>
              <div className={classes.inputContainer}>
                <TextField
                  className={classes.signinInputs}
                  id="outlined-basic"
                  label="Re-enter Password"
                  variant="outlined"
                />
              </div>
              <Button
                className={classes.signinSubmitButton}
                color="primary"
                variant="contained"
                type="submit"
              >
                SIGN UP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;

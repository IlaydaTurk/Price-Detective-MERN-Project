import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import LocalGroceryStoreTwoToneIcon from "@material-ui/icons/LocalGroceryStoreTwoTone";

import useStyles from "./UserSigninStyle";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const UserSignin = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  /*const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputValue((values) => ({ ...values, [name]: value }));
  };

  const submitForm = () => {
    if (inputValue.email === "" || inputValue.password === "") {
      alert("Wrong email or password");
    } else {
      console.log(inputValue);
    }
  };*/

  return (
    <div>
      <Box className={classes.signinBackground}>
        <AppBar position="static">
          <Container maxWidth="xl" className={classes.signinHeader}>
            <Toolbar>
              <Link to="/" title="Home Page" style={{ textDecoration: "none" }}>
                <Typography variant="h5" className={classes.logoText}>
                  <LocalGroceryStoreTwoToneIcon className={classes.logoImg} />
                  Price
                  <br />
                  Detective
                </Typography>
              </Link>
            </Toolbar>
          </Container>
        </AppBar>
        <div className={classes.signinContainer}>
          <div className={classes.formContainer}>
            <div className={classes.form}>
              <form
                className={classes.formContent}
                onSubmit={formik.handleSubmit}
              >
                <Typography className={classes.formTitle}>
                  Sign in to your account
                </Typography>
                <div className={classes.inputField}>
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    className={classes.formInput}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    variant="outlined"
                  />
                </div>
                <div>
                  <div className={classes.inputField}>
                    <TextField
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      className={classes.formInput}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                      variant="outlined"
                    />
                  </div>
                  <Typography className={classes.formForgotPass}>
                    Forgot password
                  </Typography>
                </div>
                <Button
                  className={classes.formButton}
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  Sign in
                </Button>
                <Link to="/signup" title="Sign Up Page">
                  <Typography className={classes.formSignup}>
                    Sign up
                  </Typography>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default UserSignin;

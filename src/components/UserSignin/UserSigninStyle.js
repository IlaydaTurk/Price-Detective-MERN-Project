import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  signinBackground: {
    position: "fixed",
    minHeight: "692px",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    zIndex: "0",
    overflow: "hidden",
    backgroundColor: "#F2F4F6",
  },
  signinHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: "20px",
    color: "#fff",
  },
  logoImg: {
    fontSize: "50px",
  },
  signinContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    height: "70%",
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      padding: "10px",
    },
  },
  form: {
    minHeight: "400px",
    width: "100%",
    maxWidth: "400px",
    zIndex: "1",
    margin: "0 auto",
    padding: "40px 20px",
    borderRadius: "10px",
    boxShadow:
      "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
    [theme.breakpoints.down("sm")]: {
      padding: "32px 32px",
      width: "80%",
    },
  },
  formContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  formTitle: {
    marginBottom: "40px",
    fontSize: "20px",
    fontWeight: "400",
    textAlign: "center",
  },
  inputField: {
    minHeight: "80px",
  },
  formInput: {
    minWidth: "300px",
  },
  formForgotPass: {
    margin: "2px 5px 32px 2px",
  },
  formButton: {
    maxWidth: "150px",
    marginBottom: "32px",
  },
}));

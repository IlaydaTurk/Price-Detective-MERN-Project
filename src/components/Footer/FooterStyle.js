import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footerWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    minHeight: "250px",
    backgroundColor: "#34383b",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  logoText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: "20px",
    color: "#fff",
  },
  logo: {
    fontSize: "50px",
  },
  rights: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
  },
  socialMedia: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "30px 0",
    textAlign: "center",
  },
  socialMediaIconContainer: {
    display: "flex",
    flexDirection: "column",
  },
  socialMediaIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    listStyle: "none",
  },
  icons: {
    color: "#fff",
    fontSize: "2.5rem",
  },
}));

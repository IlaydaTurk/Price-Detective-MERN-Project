import { alpha, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  logoText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: "20px",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  logoImg: {
    fontSize: "50px",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "#fff",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },
  seachBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dropdown: {
    padding: "0 20px",
  },
  dropdownInput: {
    width: "100px",
    backgroundColor: "rgb(255,255,255,0.2)",
    borderRadius: "5px",
  },
  dropdownTextColor: {
    color: "#fff",
  },
  btnLink: {
    color: "#fff",
  },
}));

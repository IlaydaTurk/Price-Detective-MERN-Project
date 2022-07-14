import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  heroContainer: {
    background: "#0c0c0c",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 30px",
    height: "100vh",
  },
  heroBg: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    zIndex: "1",
  },
  videoBg: {
    width: "100%",
    height: "100%",
    "-o-object-fit": "cover",
    objectFit: "cover",
    background: "#232a34",
  },
  heroBgGlass: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    zIndex: "2",
    background: "rgb(0,0,0,0.3)",
  },
  heroContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    color: "#fff",
    maxWidth: "500px",
    zIndex: "3",
  },
  heroTitle: {
    fontSize: "60px",
    lineHeight: "3.7rem",
    padding: "10px",
  },
  heroSubtitle: {
    fontSize: "30px",
    lineHeight: "2rem",

  },
}));

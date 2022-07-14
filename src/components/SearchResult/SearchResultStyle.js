import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  searchContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: "25px",
  },
  searchNumberof: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: "40px",
    borderTop: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
    boxShadow: "0 0 10px #ddd",
    backgroundColor: "#fff",
  },
  searchResultContainer: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    marginTop: "25px",
  },
  searchFilter: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "250px",
    maxWidth: "350px",
    backgroundColor: "rgb(200,200,200)",
  },
  searcFilterList: {
    margin: "5px",
    padding: "0",
    listStyle: "none",
  },
  searchPriceRange: {
    display: "flex",
    margin: "10px",
  },
  searchResultsContainer: {
    display: "flex",
    width: "1028px",
    minHeight: "600px",
    height: "100%",
    backgroundColor: "rgb(150,150,150)",
  },
  searchResults: {},
}));

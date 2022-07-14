import React, { useState } from "react";
import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  InputBase,
  Box,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import LocalGroceryStoreTwoToneIcon from "@material-ui/icons/LocalGroceryStoreTwoTone";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sendData } from "../../redux/searchStore";

import useStyles from "./NavbarStyle";

//**************************** We can change the current inputbox to mui-text field inputbox ***********************/

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const searchData = useSelector((state) => state.searchData.value);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const inputChange = (e) => {
    console.log(inputValue);
    setInputValue(e.target.value);
  };

  const inputHandle = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      dispatch(sendData(inputValue));

      alert(inputValue);

      if (window.location.pathname !== "/search") {
        navigate("/search", { replace: true });
      }
    }
  };

  return (
    <AppBar position="sticky">
      <CssBaseline />
      <Toolbar className={classes.toolbar}>
        <Box>
          <Link to="/" title="Home Page" style={{ textDecoration: "none" }}>
            <Typography variant="h5" className={classes.logoText}>
              <LocalGroceryStoreTwoToneIcon className={classes.logoImg} />
              Price
              <br />
              Detective
            </Typography>
          </Link>
        </Box>
        <Box display="flex" className={classes.seachBar}>
          <Box>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                onChange={inputChange}
                onKeyPress={inputHandle}
                placeholder="What do you want to buy cheap?"
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
                inputProps={{ maxLength: 30 }}
              />
            </div>
          </Box>
          <Box className={classes.dropdown} sx={{ maxWidth: 120 }}>
            <FormControl
              className={classes.dropdownInput}
              sx={{ m: 1, minWidth: 120 }}
            >
              <InputLabel id="demo-simple-select-label">Sort Option</InputLabel>
              <Select
                className={classes.dropdownTextColor}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem value={1}>Sort by Price</MenuItem>
                <MenuItem value={2}>Sort by Location</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box>
          <Link
            to="signin"
            title="Sign in Page"
            style={{ textDecoration: "none" }}
          >
            <Button
              className={classes.btnLink}
              color="inherit"
              variant="outlined"
            >
              Login
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

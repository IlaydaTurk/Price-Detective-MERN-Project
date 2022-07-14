import React from "react";
import { Routes, Route } from "react-router-dom";
//import { CssBaseline, Grid } from '@material-ui/core';

import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

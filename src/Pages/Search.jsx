import React from "react";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SearchResult from "../components/SearchResult/SearchResult";

const Search = () => {

  return (
    <div>
      <Navbar />
      <SearchResult />
      <Footer />
    </div>
  );
};

export default Search;

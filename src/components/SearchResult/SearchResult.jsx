import React from "react";

import useStyles from "./SearchResultStyle";

const SearchResult = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.searchContainer}>
        <div className={classes.searchNumberof}>
          <div>Searched product: ".............."</div>
          <div>
            <form action="get">
              <label>Sort by: </label>
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </form>
          </div>
        </div>
        <div className={classes.searchResultContainer}>
          <div className={classes.searchFilterContainer}>
            <div className={classes.searchFilter}>
              <div>Brand</div>
              <ul className={classes.searcFilterList}>
                <li>
                  <input type="checkbox" />
                  <label>Brand Name 2</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label>Brand Name 3</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label>Brand Name 4</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label>Brand Name 5</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label>Brand Name 6</label>
                </li>
              </ul>
              <div>Price</div>
              <ul className={classes.searcFilterList}>
                <li>
                  <input type="checkbox" />
                  <label>Max 50$</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label>50$ - 100$</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label>100$ - 250$</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label>250$ - 500$</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label>500$ and Above</label>
                </li>
              </ul>
              <div className={classes.searchPriceRange}>
                <input
                  type="number"
                  style={{ marginRight: "5px", width: "75px" }}
                />
                <input
                  type="number"
                  style={{ marginRight: "5px", width: "75px" }}
                />
                <button>Go</button>
              </div>
            </div>
          </div>
          <div className={classes.searchResultsContainer}>
            <div className={classes.searchResults}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;

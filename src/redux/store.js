import { configureStore } from '@reduxjs/toolkit';
import searchReducer from "./searchStore"

export const store = configureStore({
  reducer: {
    searchData: searchReducer
    //userLoggedIn : bla bla
  },
})

// We touch this file if we have a another storage for props.
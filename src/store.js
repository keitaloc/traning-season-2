import { combineReducers, createStore } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "./redux/calendarReducers";
import dataReducer from "./redux/dataReducer";

const combineReducer = combineReducers({ calendarReducer, dataReducer });

const store = createStore(combineReducer);

export default store;

// export const store = configureStore({
//   reducer: {},
// });

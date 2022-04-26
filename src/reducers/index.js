
import { combineReducers } from "redux";
import change_month from "./change_month";
import choose_date from "./choose_date";
import { list_work } from "./list_work";

export const rootReducers = combineReducers({
    month: change_month,
    work: list_work,
    date: choose_date
});
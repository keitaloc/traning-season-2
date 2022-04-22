import { NEXT_MONTH, PREV_MONTH, CURR_MONTH } from "./constants";

export const prevMonth = () => {
  return { type: PREV_MONTH };
};

export const currMonth = () => {
  return { type: CURR_MONTH };
};

export const nextMonth = () => {
  return { type: NEXT_MONTH };
};

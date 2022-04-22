import { NEXT_MONTH, PREV_MONTH } from "./constants";

export const nextMonth = () => {
  return { type: NEXT_MONTH };
};
export const prevMonth = () => {
  return { type: PREV_MONTH };
};

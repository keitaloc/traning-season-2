import { NEXT_MONTH, PREV_MONTH, CURR_MONTH } from "./constants";

const calendar = {
  id: [],
  date: new Date(),
  day: new Date().getDate(),
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
};

const calendarReducer = (state = calendar, action) => {
  switch (action.type) {
    case NEXT_MONTH:
      const nextMonth =
        state.month + 1 > 11 ? (state.month = 0) : state.month + 1;
      const nextYear = nextMonth === 0 ? state.year + 1 : state.year;
      state = {
        ...state,
        month: nextMonth,
        year: nextYear,
        date: new Date(nextYear, nextMonth, state.day),
      };

      return state;

    case CURR_MONTH:
      state = {
        ...state,
        // date: new Date(
        //   new Date().getFullYear(),
        //   new Date().getMonth(),
        //   new Date().getDate()
        // ),
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
      };

      return state;

    case PREV_MONTH:
      const prevMonth =
        state.month - 1 < 0 ? (state.month = 11) : state.month - 1;
      const prevYear = prevMonth === 11 ? state.year - 1 : state.year;

      state = {
        ...state,
        month: prevMonth,
        year: prevYear,
        date: new Date(prevYear, prevMonth, state.day),
      };

      return state;

    default:
      return state;
  }
};

export default calendarReducer;

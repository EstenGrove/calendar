import { useState, useEffect } from "react";
import {
  format,
  isSameWeek,
  eachDay,
  startOfWeek,
  lastDayOfWeek,
  startOfMonth,
  endOfMonth,
  addWeeks,
  subWeeks,
  addMonths,
  subMonths,
  isSameMonth
} from "date-fns";

export const useDates = (base = new Date()) => {
  const [todaysDate, setTodaysDate] = useState(base);
  const [currentWeek, setCurrentWeek] = useState({
    weekStart: startOfWeek(base),
    weekEnd: lastDayOfWeek(base)
  });
  const [currentMonth, setCurrentMonth] = useState({
    monthStart: startOfMonth(base),
    monthEnd: endOfMonth(base)
  });
  // sets each day's date for the current week
  const [currentDays, setCurrentDays] = useState(
    eachDay(startOfWeek(base), lastDayOfWeek(base))
  );

  const [currentDaysInMonth, setCurrentDaysInMonth] = useState(
    eachDay(startOfMonth(base), endOfMonth(base))
  );

  const getNextWeek = (start = currentWeek.weekStart) => {
    const nextWeek = addWeeks(start, 1);

    setCurrentWeek({
      weekStart: startOfWeek(nextWeek),
      weekEnd: lastDayOfWeek(nextWeek)
    });
  };

  const getPrevWeek = (start = currentWeek.weekStart) => {
    const prevWeek = subWeeks(start, 1);

    setCurrentWeek({
      weekStart: startOfWeek(prevWeek),
      weekEnd: lastDayOfWeek(prevWeek)
    });
  };

  const getNextMonth = (start = currentMonth.monthStart) => {
    const nextMonth = addMonths(start, 1);

    setCurrentMonth({
      monthStart: startOfMonth(nextMonth),
      monthEnd: endOfMonth(nextMonth)
    });
  };

  const getPrevMonth = (start = currentMonth.monthStart) => {
    const prevMonth = subMonths(start, 1);

    setCurrentMonth({
      monthStart: startOfMonth(prevMonth),
      monthEnd: endOfMonth(prevMonth)
    });
  };

  // DATE HELPERS
  const sameWeek = (a, b) => {
    return isSameWeek(a, b);
  };

  const sameMonth = (a, b) => {
    return isSameMonth(a, b);
  };

  // update the days anytime weekStart/End changes
  useEffect(() => {
    setCurrentDays(eachDay(currentWeek.weekStart, currentWeek.weekEnd));
    setCurrentDaysInMonth(
      eachDay(currentMonth.monthStart, currentMonth.monthEnd)
    );
  }, [
    currentWeek.weekStart,
    currentWeek.weekEnd,
    currentMonth.monthStart,
    currentMonth.monthEnd
  ]);

  return {
    todaysDate,
    sameWeek,
    sameMonth,
    currentDays,
    currentWeek,
    currentMonth,
    getPrevWeek,
    getNextWeek,
    getPrevMonth,
    getNextMonth,
    currentDaysInMonth
  };
};

export const formatDate = val => {
  if (val.constructor === Array) {
    return val.map(x => x.toString().slice(0, 10));
  }
  return val.toString().slice(0, 15);
};

export const dateFormatting = (desired, dates) => {
  switch (desired) {
    case "DAY_AND_DATE":
      return dates.map(x => x.toString().slice(0, 10));

    case "JUST_DAYDATE":
      return dates.map(x => format(x, "D"));
    case "ABBR_DAYS":
      return dates.map(x => x.toString().slice(0, 1));
    case "ABBR_DAY":
      return dates.toString().slice(0, 1);
    default:
      return new Error("Invalid params were provided.");
  }
};

export const weekDays = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];

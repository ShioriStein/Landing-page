import dateService from "../../services/dateService";

const { getDaysArray, compare2Date } = dateService;

export default {
  items: state => ({ year, month }) => {
    return state.workTimes.map(workTime => {
      const { userId, fullName, avatar, worktimes } = workTime;
      const checkIn = getDaysArray(year, month).map(date => {
        return {
          date: date.date,
          checkIn: worktimes.find(el => {
            return compare2Date(el.date, date.date);
          })?.checkIn
        };
      });
      const checkOut = getDaysArray(year, month).map(date => {
        return {
          date: date.date,
          checkOut: worktimes.find(el => {
            return compare2Date(el.date, date.date);
          })?.checkOut
        };
      });
      return {
        userId,
        fullName,
        avatar,
        checkIn,
        checkOut
      };
    });
  }
};

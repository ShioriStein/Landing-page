import moment from "moment";

const dateService = {
  compare2Date(date1, date2) {
    return (
      moment(date1).format("YYYY-MM-DD") === moment(date2).format("YYYY-MM-DD")
    );
  },
  getDaysArray(year, month) {
    const monthIndex = month;
    const names = Object.freeze([
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ]);
    const date = new Date(year, monthIndex, 1);
    const result = [];
    while (date.getMonth() === monthIndex) {
      result.push({
        text: `${names[date.getDay()]} ${date.getDate()}`,
        value: `${names[date.getDay()]} ${date.getDate()}`,
        date: `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(
          -2
        )}-${date.getDate()}`,
        width: 200,
        sortable: false
      });
      date.setDate(date.getDate() + 1);
    }
    return result;
  }
};

export default dateService;

// console.log("First log");
// console.log("Second log");
// console.log("Third log");

// console.log("Third log");
// setTimeout(() => {
//   console.log("Second log");
// }, 2000);


// const greet = () => {
//   console.log("Hello");
  
// };

// const timerId = setTimeout(greet, 3000);
// clearTimeout(timerId);


// const date = new Date();

// console.log(date);
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(date.toString());
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"


// console.log(new Date(0));
// // "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

// console.log(new Date(15000));
// // "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"

// const teamMeetingDate = new Date("March 16, 2030");
// console.log(teamMeetingDate);
// // "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"

// const preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00");
// console.log(preciseTeamMeetingDate);
// // "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"


// const date = new Date(2030, 2, 16, 14, 25, 0, 0);
// console.log(date);
// // Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)


const date = new Date();
console.log("Date: ", date);

// Повертає день місяця від 1 до 31
console.log("getDate(): ", date.getDate());

// Повертає день тижня від 0 до 6
console.log("getDay(): ", date.getDay());

// Повертає місяць від 0 до 11
console.log("getMonth(): ", date.getMonth());

// Повертає рік з 4 цифр
console.log("getFullYear(): ", date.getFullYear());

// Повертає години
console.log("getHours(): ", date.getHours());

// Повертає хвилини
console.log("getMinutes(): ", date.getMinutes());

// Повертає секунди
console.log("getSeconds(): ", date.getSeconds());

// Повертає мілісекунди
console.log("getMilliseconds(): ", date.getMilliseconds());

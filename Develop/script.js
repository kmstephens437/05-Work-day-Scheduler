//declaring globals for date/time reference

var day = "";
var hour = 0;

//array for days of week

var dayName = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
]

var currentHour = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

//current day and hour 

//day = dayName[dayjs().day()]
//hour = currentHour[dayjs().hour(h)]

//DayJS method for current date/time

var date = new Date();
document.getElementById('date-time').innerHTML=date;



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//$('.hour').each(function () {
//  if ($(this).data('time') ===hour) {
//    $(this).parent().next().children().removeClass('future').addClass('present');
//  }
//  else if ($(this).data('time')<hour) {
//    $(this).parent().next().children().removeClass('present').addClass('past');
//  }
//  else if ($(this).data('time')>hour) {
//    $(this).parent().next().children().removeClass('future').addClass('present')
//  }
//});


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

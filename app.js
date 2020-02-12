//Arrays for Date values
var Week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednessday",
  "Thursday",
  "Friday",
  "Saturday"
];
var Month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

var Today = new Date();

var CurrentMonth = Today.getMonth(); //returns current month

var DayOfWeek = Today.getDay(); //returns Day of Week

var DayOfMonth = Today.getDate(); //returns Day of Month

var ThisYear = Today.getFullYear(); //returns Year

var DisplayedDate = Week[DayOfWeek].toString();
DisplayedDate += ", ";
DisplayedDate += Month[CurrentMonth].toString();
DisplayedDate += " ";
DisplayedDate += DayOfMonth.toString();

var DaySuffix = "th";

if (DayOfMonth.toString().charAt(DayOfMonth.toString.length - 1) === "1")
  DaySuffix = "st";

if (DayOfMonth.toString().charAt(DayOfMonth.toString.length - 1) === "2")
  DaySuffix = "nd";

if (DayOfMonth.toString().charAt(DayOfMonth.toString.length - 1) === "3")
  DaySuffix = "rd";
if (DayOfMonth.toString().length === 2) {
  if (DayOfMonth.toString().charAt(DayOfMonth.toString.length - 1) === "1")
    //alert(DayOfMonth.toString().charAt(DayOfMonth.toString.length - 2));
    DaySuffix = "th";
}
DisplayedDate += DaySuffix;

var DateSpan = (document.getElementById("DateSup").innerText = DisplayedDate);

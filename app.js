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

const Day2 = new Date(Today);
Day2.setDate(Day2.getDate() + 1);

const Day3 = new Date(Day2);
Day3.setDate(Day3.getDate() + 1);

const Day4 = new Date(Day3);
Day4.setDate(Day4.getDate() + 1);

const Day5 = new Date(Day4);
Day5.setDate(Day5.getDate() + 1);

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

//API code below

//Getting User's Location Below
var longit;
var Latit;

var locationOptions = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000
};

function showPosition(position) {
  Latit = position.coords.latitude;
  Longit = position.coords.longitude;
  //calling API function here to make sure that Longit and Latit are set before hitting the API
  OnPageLoadAPICall(Latit, Longit);
}

function locationErrorHandling(error) {
  //alert("ERROR(" + error.code + "): " + error.message);
  //Will add error handling here;
}

function getLocation() {
  if (navigator.geolocation) {
    /*var watchID = navigator.geolocation.watchPosition(
      showPosition,
      locationErrorHandling,
      locationOptions
    );*/
    navigator.geolocation.getCurrentPosition(
      showPosition,
      locationErrorHandling,
      locationOptions
    );
    //navigator.geolocation.getCurrentPosition(showPosition, locationErrorHandling, locationOptions);
    //alert(watchID);
    //navigator.geolocation.clearWatch(watchID);
  } else {
    alert("Location is not supported by this browser.");
  }
}

getLocation();

function CelcToFeh(number) {
  return (number * 9) / 5 + 32;
}

function KelvToFeh(number) {
  let temp = ((number - 273.15) * 9) / 5 + 32;
  return Math.floor(temp);
}

//http://api.openweathermap.org/data/2.5/weather;

//Getting today's weather info
function OnPageLoadAPICall(lat, long) {
  $.ajax({
    type: "GET",
    url: "http://api.openweathermap.org/data/2.5/weather",
    data:
      "lat=" + lat + "&lon=" + long + "&appid=70ef0ec48add544e91d4d3f76b0ae626",
    success: function(data) {
      console.log(data);
      //setting today's icon
      $(".TodayWeatherIcon").attr(
        "src",
        "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
      );

      //displaying temperature description
      document.querySelector(".temperature-description").innerText =
        data.weather[0].description;

      //displaying time-zone
      document.querySelector(".temperature-degree").innerText =
        KelvToFeh(data.main.temp) + "°F";
    }
  });

  //APIURL = 'api.openweathermap.org/data/2.5/forecast';
  //Getting weather forecast of next five days
  $.ajax({
    type: "GET",
    url: "http://api.openweathermap.org/data/2.5/forecast",
    data:
      "lat=" + lat + "&lon=" + long + "&appid=70ef0ec48add544e91d4d3f76b0ae626",
    success: function(data) {
      //alert(data.list[0].weather[0].main);
      console.log(data);
      console.log(data.list[0].weather[0].main);

      document.querySelector(".location-timezone").innerText =
        data.city.name + ", " + data.city.country;

      /*document.querySelector(".temperature-time").innerText =
        data.list[0].dt_txt;*/

      //setting Icons

      //tomorrow
      $("#Day2Icon").attr(
        "src",
        "http://openweathermap.org/img/wn/" +
          data.list[0].weather[0].icon +
          "@2x.png"
      );
      //day 3
      $("#Day3Icon").attr(
        "src",
        "http://openweathermap.org/img/wn/" +
          data.list[7].weather[0].icon +
          "@2x.png"
      );
      //day 4
      $("#Day4Icon").attr(
        "src",
        "http://openweathermap.org/img/wn/" +
          data.list[15].weather[0].icon +
          "@2x.png"
      );
      //day 3
      $("#Day5Icon").attr(
        "src",
        "http://openweathermap.org/img/wn/" +
          data.list[23].weather[0].icon +
          "@2x.png"
      );

      //setting temperatures
      $("#Day2Temp").text(KelvToFeh(data.list[0].main.temp) + "°F");
      $("#Day3Temp").text(KelvToFeh(data.list[7].main.temp) + "°F");
      $("#Day4Temp").text(KelvToFeh(data.list[15].main.temp) + "°F");
      $("#Day5Temp").text(KelvToFeh(data.list[23].main.temp) + "°F");
    }
  });
}

//Search Function to get temperature for specified city
function SearchTempForCity(city) {
  //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}
  $.ajax({
    type: "GET",
    url: "http://api.openweathermap.org/data/2.5/weather",
    data: "q=" + city + "&appid=70ef0ec48add544e91d4d3f76b0ae626",
    success: function(data) {
      console.log(data);
      //setting today's icon
      $(".TodayWeatherIcon").attr(
        "src",
        "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
      );

      //displaying temperature description
      document.querySelector(".temperature-description").innerText =
        data.weather[0].description;

      //displaying time-zone
      document.querySelector(".temperature-degree").innerText =
        KelvToFeh(data.main.temp) + "°F";
    }
  });

  //APIURL = 'api.openweathermap.org/data/2.5/forecast';
  //Getting weather forecast of next five days
  $.ajax({
    type: "GET",
    url: "http://api.openweathermap.org/data/2.5/forecast",
    data: "q=" + city + "&appid=70ef0ec48add544e91d4d3f76b0ae626",
    success: function(data) {
      //alert(data.list[0].weather[0].main);
      console.log(data);
      console.log(data.list[0].weather[0].main);

      document.querySelector(".location-timezone").innerText =
        data.city.name + ", " + data.city.country;

      /*document.querySelector(".temperature-time").innerText =
      data.list[0].dt_txt;*/

      //setting Icons

      //tomorrow
      $("#Day2Icon").attr(
        "src",
        "http://openweathermap.org/img/wn/" +
          data.list[0].weather[0].icon +
          "@2x.png"
      );
      //day 3
      $("#Day3Icon").attr(
        "src",
        "http://openweathermap.org/img/wn/" +
          data.list[7].weather[0].icon +
          "@2x.png"
      );
      //day 4
      $("#Day4Icon").attr(
        "src",
        "http://openweathermap.org/img/wn/" +
          data.list[15].weather[0].icon +
          "@2x.png"
      );
      //day 3
      $("#Day5Icon").attr(
        "src",
        "http://openweathermap.org/img/wn/" +
          data.list[23].weather[0].icon +
          "@2x.png"
      );

      //setting temperatures
      $("#Day2Temp").text(KelvToFeh(data.list[0].main.temp) + "°F");
      $("#Day3Temp").text(KelvToFeh(data.list[7].main.temp) + "°F");
      $("#Day4Temp").text(KelvToFeh(data.list[15].main.temp) + "°F");
      $("#Day5Temp").text(KelvToFeh(data.list[23].main.temp) + "°F");
    }
  });
}

document.querySelector(".SearchBtn").addEventListener("click", function(e) {
  let SearchQuery = document.querySelector(".SearchFld").value;
  if (SearchQuery === "" || SearchQuery === null) {
    alert("Please enter city");
  } else {
    SearchTempForCity(SearchQuery);
  }
});

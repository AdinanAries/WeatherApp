//Arrays for Date values
var Week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

var ShortWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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

//below is an array of objects used to specify or describe UV data whose returned value from API is of float or double type
var UVIObjects = [
  {
    value: "1-2", //value to compare with API returned value
    Desc: "Low",
    Rem: "Cover head and/or eyes",
    color: "green"
  },
  {
    value: "3-5",
    Desc: "Moderate",
    Rem: "Use low SPF sunscreen",
    color: "yellow"
  },
  {
    value: "6-7",
    Desc: "High",
    Rem: "Spend little time outdoors",
    color: "orange"
  },
  {
    value: "8-10",
    Desc: "Very High",
    Rem: "Do not spend time outdoors",
    color: "red"
  },
  {
    value: "11+",
    Desc: "Extreme",
    Rem: "Don't go out",
    color: "violet"
  }
];

var Today = new Date();

const Day2 = new Date(Today);
Day2.setDate(Day2.getDate() + 1);

//setting day 2 day and date

var Day2Date = Day2.getDate();
var Day2DisplayDate;

var Day2Suffix = "th";

if (Day2Date.toString().charAt(Day2Date.toString.length - 1) === "1")
  Day2Suffix = "st";

if (Day2Date.toString().charAt(Day2Date.toString.length - 1) === "2")
  Day2Suffix = "nd";

if (Day2Date.toString().charAt(Day2Date.toString.length - 1) === "3")
  Day2Suffix = "rd";
if (Day2Date.toString().length === 2) {
  if (Day2Date.toString().charAt(Day2Date.toString.length - 1) === "1")
    //alert(DayOfMonth.toString().charAt(DayOfMonth.toString.length - 2));
    Day2Suffix = "th";
}

Day2DisplayDate = Day2Date + Day2Suffix + ", " + ShortWeek[Day2.getDay()];
document.getElementById("Day2").innerText = Day2DisplayDate;

const Day3 = new Date(Day2);
Day3.setDate(Day3.getDate() + 1);

//setting day 3 day and date

var Day3Date = Day3.getDate();
var Day3DisplayDate;

var Day3Suffix = "th";

if (Day3Date.toString().charAt(Day3Date.toString.length - 1) === "1")
  Day3Suffix = "st";

if (Day3Date.toString().charAt(Day3Date.toString.length - 1) === "2")
  Day3Suffix = "nd";

if (Day3Date.toString().charAt(Day3Date.toString.length - 1) === "3")
  Day3Suffix = "rd";
if (Day3Date.toString().length === 2) {
  if (Day3Date.toString().charAt(Day3Date.toString.length - 1) === "1")
    //alert(DayOfMonth.toString().charAt(DayOfMonth.toString.length - 2));
    Day3Suffix = "th";
}

Day3DisplayDate = Day3Date + Day3Suffix + ", " + ShortWeek[Day3.getDay()];
document.getElementById("Day3").innerText = Day3DisplayDate;

const Day4 = new Date(Day3);
Day4.setDate(Day4.getDate() + 1);

//setting day 2 day and date

var Day4Date = Day4.getDate();
var Day4DisplayDate;

var Day4Suffix = "th";

if (Day4Date.toString().charAt(Day4Date.toString.length - 1) === "1")
  Day4Suffix = "st";

if (Day4Date.toString().charAt(Day4Date.toString.length - 1) === "2")
  Day4Suffix = "nd";

if (Day4Date.toString().charAt(Day4Date.toString.length - 1) === "3")
  Day4Suffix = "rd";
if (Day4Date.toString().length === 2) {
  if (Day4Date.toString().charAt(Day4Date.toString.length - 1) === "1")
    //alert(DayOfMonth.toString().charAt(DayOfMonth.toString.length - 2));
    Day4Suffix = "th";
}

Day4DisplayDate = Day4Date + Day4Suffix + ", " + ShortWeek[Day4.getDay()];
document.getElementById("Day4").innerText = Day4DisplayDate;

const Day5 = new Date(Day4);
Day5.setDate(Day5.getDate() + 1);

//setting day 2 day and date

var Day5Date = Day5.getDate();
var Day5DisplayDate;

var Day5Suffix = "th";

if (Day5Date.toString().charAt(Day5Date.toString.length - 1) === "1")
  Day5Suffix = "st";

if (Day5Date.toString().charAt(Day5Date.toString.length - 1) === "2")
  Day5Suffix = "nd";

if (Day5Date.toString().charAt(Day5Date.toString.length - 1) === "3")
  Day5Suffix = "rd";
if (Day5Date.toString().length === 2) {
  if (Day5Date.toString().charAt(Day5Date.toString.length - 1) === "1")
    //alert(DayOfMonth.toString().charAt(DayOfMonth.toString.length - 2));
    Day5Suffix = "th";
}

Day5DisplayDate = Day5Date + Day5Suffix + ", " + ShortWeek[Day5.getDay()];
document.getElementById("Day5").innerText = Day5DisplayDate;

//working around current day
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
    navigator.geolocation.getCurrentPosition(
      showPosition,
      locationErrorHandling,
      locationOptions
    );
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
      document.querySelector(".location-timezone").innerText =
        data.city.name + ", " + data.city.country;

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

  getCurrentUV(lat, long);
}

//Search Function to get temperature for specified city
function SearchTempForCity(city) {
  //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}
  $.ajax({
    type: "GET",
    url: "http://api.openweathermap.org/data/2.5/weather",
    data: "q=" + city + "&appid=70ef0ec48add544e91d4d3f76b0ae626",
    success: function(data) {
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
      document.querySelector(".location-timezone").innerText =
        data.city.name + ", " + data.city.country;

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

//Adding Search function to .SearchBtn onclick eventHandler
document.querySelector(".SearchBtn").addEventListener("click", function(e) {
  let SearchQuery = document.querySelector(".SearchFld").value;
  if (SearchQuery === "" || SearchQuery === null) {
    alert("Please enter city");
  } else {
    SearchTempForCity(SearchQuery);
  }
});

//functions for getting UVI data
function getCurrentUV(lat, long) {
  $.ajax({
    type: "GET",
    url: "http://api.openweathermap.org/data/2.5/uvi",
    data: "appid=70ef0ec48add544e91d4d3f76b0ae626&lat=" + lat + "&lon=" + long,
    success: function(resp) {
      console.log(resp);
      var UVValue = Math.floor(resp.value);

      if (UVValue <= 2) {
        let SUVNumber = document.getElementById("SUVNumber");
        let UVNum = UVIObjects[0].value;
        let UVRem = UVIObjects[0].Rem;
        let UVDesc = UVIObjects[0].Desc;
        let UVCol = UVIObjects[0].color;

        let UvDisplay = `UV(${UVNum}): ${UVRem}, ${UVDesc}`;
        SUVNUmber.innerText = UvDisplay;
        SUVNumber.style.borderLeft = "25px solid " + UVCol;
      }

      if (UVValue > 2 && UVValue <= 5) {
        let SUVNumber = document.getElementById("SUVNumber");
        let UVNum = UVIObjects[1].value;
        let UVRem = UVIObjects[1].Rem;
        let UVDesc = UVIObjects[1].Desc;
        let UVCol = UVIObjects[1].color;

        let UvDisplay = `UV(${UVNum}): ${UVRem}, ${UVDesc}`;
        SUVNUmber.innerText = UvDisplay;
        SUVNumber.style.borderLeft = "25px solid " + UVCol;
      }

      if (UVValue > 5 && UVValue <= 7) {
        let SUVNumber = document.getElementById("SUVNumber");
        let UVNum = UVIObjects[2].value;
        let UVRem = UVIObjects[2].Rem;
        let UVDesc = UVIObjects[2].Desc;
        let UVCol = UVIObjects[2].color;

        let UvDisplay = `UV(${UVNum}): ${UVRem}, ${UVDesc}`;
        SUVNUmber.innerText = UvDisplay;
        SUVNumber.style.borderLeft = "25px solid " + UVCol;
      }

      if (UVValue > 7 && UVValue <= 10) {
        var SUVNumber = document.getElementById("SUVNumber");
        let UVNum = UVIObjects[3].value;
        let UVRem = UVIObjects[3].Rem;
        let UVDesc = UVIObjects[3].Desc;
        let UVCol = UVIObjects[3].color;

        let UvDisplay = `UV(${UVNum}): ${UVRem}, ${UVDesc}`;
        SUVNUmber.innerText = UvDisplay;
        SUVNumber.style.borderLeft = "25px solid " + UVCol;
      }

      if (UVValue >= 11) {
        let SUVNumber = document.getElementById("SUVNumber");
        let UVNum = UVIObjects[4].value;
        let UVRem = UVIObjects[4].Rem;
        let UVDesc = UVIObjects[4].Desc;
        let UVCol = UVIObjects[4].color;

        let UvDisplay = `UV(${UVNum}): ${UVRem}, ${UVDesc}`;
        SUVNUmber.innerText = UvDisplay;
        SUVNumber.style.borderLeft = "25px solid " + UVCol;
      }
    }
  });
}

/*

function getCityUV(city) {
  $.ajax({
    type: "GET",
    url: "http://api.openweathermap.org/data/2.5/uvi",
    data: "appid=70ef0ec48add544e91d4d3f76b0ae626&q=" + city,
    success: function(resp) {
      console.log(resp);
    }
  });
}*/

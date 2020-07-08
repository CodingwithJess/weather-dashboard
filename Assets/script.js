// global variables
var APIKey = "748841953b1647f23e37f49111c4e30a";
var searchBtn = $(".searchBtn");
var searchInput = $(".searchInput");

// left column
var cityNameEl = $(".cityName");
var currentDateEl = $(".currentDate");
var weatherIconEl= $(".weatherIcon");
var searchHistoryEl= $(".historyItems");


// right column

var tempEl = $(".temp");
var humidityEl = $(".humidity");
var windSpeedEl = $(".windSpeed");
var uvIndexEl = $(".uvIndex");
var cardRow = $(".card-row");

// var lsKey = "weatherSearches"
// var currentWeatherDiv = $("#currentWeather");
// var forecastDiv = $("#forecast");
// var clearBtn = $("#clear");
// var metricUnits = {deg:"C", speed:"KPH"};
// var impUnits = {deg:"F",speed:"MPH"};
// var units = metricUnits;

// current date variables
var today = moment().format("MMMM Do YYYY")

if (JSON.parse(localStorage.getItem("searchHistory")) === null) {
  console.log("searchHistory not found")
}else{
  console.log("searchHistory loaded into searchHistoryArr");
  renderSearchHistory();

searchBtn.on("click", function(e) {
  e.preventDefault();
  if (searchInput.val() === "") {
      alert("You must enter a city");
      return;
  }
  console.log("clicked button")
  getWeather(searchInput.val());
});

$(document).on("click", ".historyEntry", function() {
  console.log("clicked history item")
  let thisElement = $(this);
  getWeather(thisElement.text());
})

function renderSearchHistory(cityName) {
  searchHistoryEl.empty();
  let searchHistoryArr = JSON.parse(localStorage.getItem("searchHistory"));
  for (let i = 0; i < searchHistoryArr.length; i++) {
      //newListItem in forloop, otherwise the text of the li element changes
      let newListItem = $("<li>").attr("class", "historyEntry");
      newListItem.text(searchHistoryArr[i]);
      searchHistoryEl.prepend(newListItem);
  }
}

function renderWeatherData(cityName, cityTemp, cityHumidity, cityWindSpeed, cityWeatherIcon, uvVal) {
  cityNameEl.text(cityName)
  currentDateEl.text(`(${today})`)
  tempEl.text(`Temperature: ${cityTemp} °F`);
  humidityEl.text(`Humidity: ${cityHumidity}%`);
  windSpeedEl.text(`Wind Speed: ${cityWindSpeed} MPH`);
  uvIndexEl.text(`UV Index: ${uvVal}`);
  weatherIconEl.attr("src", cityWeatherIcon);
}

}
// global variables
var APIKey = "748841953b1647f23e37f49111c4e30a";
var searchBtn = $(".searchBtn");
var searchInput = $(".searchInput");

// left column
var cityNameEl = $(".cityName");
var currentDateEl = $(".currentDate")

var lsKey = "weatherSearches"
var searchesDiv = $("#searches");
var currentWeatherDiv = $("#currentWeather");
var forecastDiv = $("#forecast");
var clearBtn = $("#clear");
var storedSearches = getStoredSearches();
//variable used to store and determine if the city needs to be added to the search history
var addedCity = newCity();
//unit variables for future development of switching between unit systems.
var metricUnits = {deg:"C", speed:"KPH"};
var impUnits = {deg:"F",speed:"MPH"};
var units = metricUnits;





function searchButtonClicked(){  
  var cityVal = searchInput.val().trim();
  var city = newCity(cityVal, null);       
  getWeather(city);
  //clear the value once the search is activated
  searchInput.val("");        
}

function getWeather(city){
  addedCity = city; 
  let queryURLCurrent = "";
  let queryURLForecast = "";

  if(city.country == null){
      queryURLCurrent = "https://api.openweathermap.org/data/2.5/weather?q="+city.city+"&units=metric&appid="+APIKey;
      queryURLForecast = "https://api.openweathermap.org/data/2.5/forecast?q="+city.city+"&units=metric&appid="+APIKey;
  }else{        
      queryURLCurrent = "https://api.openweathermap.org/data/2.5/weather?q="+city.city+","+city.country+"&units=metric&appid="+APIKey;
      queryURLForecast = "https://api.openweathermap.org/data/2.5/forecast?q="+city.city+","+city.country+"&units=metric&appid="+APIKey;
  }
  
  performAPIGETCall(queryURLCurrent, buildCurrentWeather);
  performAPIGETCall(queryURLForecast, buildForecastWeather);    
}
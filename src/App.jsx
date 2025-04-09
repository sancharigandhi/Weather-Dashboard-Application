import { useState, useEffect } from "react";
import TabContainer from "./components/TabContainer";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("yourWeather");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [coordinates, setCoordinates] = useState(() => {
    const saved = sessionStorage.getItem("user-coordinates");
    return saved ? JSON.parse(saved) : null;
  });

  const API_KEY = import.meta.env.VITE_API_KEY;
  const [currentCity, setCurrentCity] = useState("");
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    if (activeTab === "yourWeather" && coordinates) {
      fetchUserWeatherInfo(coordinates);
    }
  }, [activeTab, coordinates]);

  async function fetchUserWeatherInfo(coords) {
    const { lat, lon } = coords;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setWeatherData(data);
      setCurrentCity(data.name);
      updateSearchHistory(data.name);

      // Fetch Forecast
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${data.name}&appid=${API_KEY}&units=metric`
      );
      if (!forecastResponse.ok) throw new Error("Forecast fetch failed");
      const forecastJSON = await forecastResponse.json();
      const daily = extractDailyForecast(forecastJSON);
      setForecastData(daily);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function fetchSearchWeatherInfo(city) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setWeatherData(data);
      updateSearchHistory(city);
      setCurrentCity(city);

      // Also fetch forecast for searched city
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      const forecastJSON = await forecastResponse.json();
      const daily = extractDailyForecast(forecastJSON);
      setForecastData(daily);
    } catch (err) {
      setError("Failed to fetch weather data for the specified city.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userCoordinates = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          sessionStorage.setItem(
            "user-coordinates",
            JSON.stringify(userCoordinates)
          );
          setCoordinates(userCoordinates);
        },
        (err) => {
          setError("Geolocation access denied or unavailable.");
          console.error(err);
        }
      );
    } else {
      setError("No geolocation support available.");
    }
  }

  function extractDailyForecast(forecastData) {
    return forecastData.list.filter((item) => item.dt_txt.includes("12:00:00"));
  }

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setSearchHistory(history);
  }, []);

  function updateSearchHistory(city) {
    const updated = [city, ...searchHistory.filter((c) => c !== city)].slice(
      0,
      5
    );
    setSearchHistory(updated);
    localStorage.setItem("searchHistory", JSON.stringify(updated));
  }

  return (
    <div className="wrapper">
      <h1>Weather Dashboard</h1>
      <TabContainer
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        coordinates={coordinates}
        getLocation={getLocation}
        loading={loading}
        weatherData={weatherData}
        currentCity={currentCity}
        fetchSearchWeatherInfo={fetchSearchWeatherInfo}
        error={error}
        forecastData={forecastData} // ✅ Pass this to TabContainer
      />
    </div>
  );
}

export default App;

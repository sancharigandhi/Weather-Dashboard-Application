import { useState } from "react";
import SearchForm from "./SearchForm";
import GrantLocation from "./GrantLocation";
import LoadingScreen from "./LoadingScreen";
import UserWeatherInfo from "./UserWeatherInfo";

export default function TabContainer({
  activeTab,
  setActiveTab,
  coordinates,
  getLocation,
  loading,
  weatherData,
  fetchSearchWeatherInfo,
  currentCity,
  forecastData,
  error,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  function handleTabChange(tab) {
    if (tab !== activeTab) {
      setActiveTab(tab);
    }
  }

  return (
    <>
      <div className="tab-container">
        <p
          className={`tab ${activeTab === "yourWeather" ? "current-tab" : ""}`}
          onClick={() => handleTabChange("yourWeather")}
        >
          Your Weather
        </p>
        <p
          className={`tab ${
            activeTab === "searchWeather" ? "current-tab" : ""
          }`}
          onClick={() => handleTabChange("searchWeather")}
        >
          Search Weather
        </p>
      </div>

      <div className="weather-container">
        {activeTab === "searchWeather" ? (
          <SearchForm
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            fetchSearchWeatherInfo={fetchSearchWeatherInfo}
          />
        ) : !coordinates ? (
          <GrantLocation getLocation={getLocation} />
        ) : null}

        {loading && <LoadingScreen />}

        {error && <p className="error-message">{error}</p>}

        {weatherData && !loading && (
          <UserWeatherInfo
            weatherData={weatherData}
            fetchSearchWeatherInfo={fetchSearchWeatherInfo}
            currentCity={currentCity}
            forecastData={forecastData}
            loading={loading}
          />
        )}
      </div>
    </>
  );
  function SearchHistory({ history, onClickCity }) {
    return (
      <div className="search-history">
        <h3>Recent Searches</h3>
        <ul>
          {history.map((city, index) => (
            <li key={index}>
              <button onClick={() => onClickCity(city)}>{city}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

import React from "react";
import windIcon from "../assets/wind.png";
import humidityIcon from "../assets/humidity.png";
import cloudIcon from "../assets/cloud.png";
import "./UserWeatherInfo.css";

export default function UserWeatherInfo({
  weatherData,
  forecastData,
  currentCity,
}) {
  if (!weatherData) return null;

  const { main, weather, wind, clouds, name, sys } = weatherData;
  const countryCode = sys?.country?.toLowerCase(); // 'us', 'in', etc.

  return (
    <div className="weather-wrapper">
      <div className="current-weather">
        <h2>
          {currentCity || name}
          {countryCode && (
            <img
              src={`https://openweathermap.org/images/flags/${countryCode}.png`}
              alt={countryCode}
              style={{
                marginLeft: "10px",
                verticalAlign: "middle",
                width: "24px",
                height: "18px",
                borderRadius: "3px",
              }}
            />
          )}
        </h2>

        <div className="weather-icon-temp">
          <img
            src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt={weather[0].description}
          />
          <h1>{main.temp.toFixed(1)}°C</h1>
        </div>
        <p className="condition-text">{weather[0].description}</p>
      </div>

      <div className="weather-cards">
        <div className="card">
          <img src={windIcon} alt="Wind" />
          <h4>WIND SPEED</h4>
          <p>{wind.speed} m/s</p>
        </div>
        <div className="card">
          <img src={humidityIcon} alt="Humidity" />
          <h4>HUMIDITY</h4>
          <p>{main.humidity}%</p>
        </div>
        <div className="card">
          <img src={cloudIcon} alt="Clouds" />
          <h4>CLOUDS</h4>
          <p>{clouds.all}%</p>
        </div>
      </div>

      {forecastData?.length > 0 && (
        <>
          <h3 className="forecast-title">5-Day Forecast</h3>
          <div className="forecast-container">
            {forecastData.slice(0, 5).map((item, index) => {
              const date = new Date(item.dt_txt);
              return (
                <div className="forecast-card" key={index}>
                  <h4>{date.toLocaleDateString()}</h4>
                  <img
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt={item.weather[0].description}
                  />
                  <p>{item.main.temp.toFixed(1)}°C</p>
                  <p>{item.weather[0].main}</p>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

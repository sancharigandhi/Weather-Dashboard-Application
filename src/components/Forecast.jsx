import ForecastCard from "./ForecastCard";

export default function Forecast({ forecast }) {
  return (
    <div className="forecast-container">
      <h3>5-Day Forecast</h3>
      <div className="forecast-list">
        {forecast.map((day) => (
          <ForecastCard key={day.dt} day={day} />
        ))}
      </div>
    </div>
  );
}

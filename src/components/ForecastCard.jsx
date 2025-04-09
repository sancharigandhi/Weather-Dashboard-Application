export default function ForecastCard({ day }) {
  return (
    <div className="forecast-card">
      <p>
        {new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "short" })}
      </p>
      <img
        src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
        alt={day.weather[0].description}
      />
      <p>{day.main.temp} °C</p>
    </div>
  );
}

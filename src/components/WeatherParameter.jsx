export default function WeatherParameter({ icon, label, value }) {
  return (
    <div className="parameter">
      <img src={icon} alt={label} />
      <p>{label}</p>
      <p>{value}</p>
    </div>
  );
}

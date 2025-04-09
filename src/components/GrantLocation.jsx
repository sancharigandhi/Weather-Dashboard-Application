import locationIcon from "../assets/location.png";
export default function GrantLocation({ getLocation }) {
  return (
    <div className="sub-container grant-location-container active">
      <img
        src={locationIcon}
        width="80"
        height="80"
        loading="lazy"
        alt="Location icon"
      />
      <p>Grant Location Access</p>
      <p>Allow Access to get weather Information</p>
      <button className="btn" onClick={getLocation}>
        Grant Access
      </button>
    </div>
  );
}

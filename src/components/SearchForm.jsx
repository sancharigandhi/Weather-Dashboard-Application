import searchIcon from "../assets/search.png"; 
export default function SearchForm({
  searchQuery,
  setSearchQuery,
  fetchSearchWeatherInfo,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    if (searchQuery.trim() === "") return;
    fetchSearchWeatherInfo(searchQuery.trim());
  }

  return (
    <form className="form-container active" onSubmit={handleSubmit}>
      <input
        placeholder="Search for City..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        
      />
      <button className="btn" type="submit">
        <img
          src={searchIcon}
          width="20"
          height="20"
          loading="lazy"
          alt="Search"
        />
      </button>
    </form>
  );
}

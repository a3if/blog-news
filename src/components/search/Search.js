
import './search.css';
const Search = ({handleSearch}) => {
  return (
    <div className="search-bar">
      <input
        type="search"
        onChange={handleSearch}
        placeholder="Enter your search ..."
      />
    </div>
  );
};

export default Search;







import "./SearchBar.css";


const SearchBar = () => {
  return (
    <>
      <div className="search-box">
        <button className="btn-search">
          <i className="fas fa-search"></i>
          Click
        </button>
        <input type="text" className="input-search" placeholder="Type to search..." />
        
           
        </div>
      
    </>
  );
};

export default SearchBar;

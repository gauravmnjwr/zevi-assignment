function Navbar({ searchQuery }) {
  const handleInputSearch = (e) => {
    searchQuery(e.target.value);
  };
  return (
    <div className="navbar">
      <div className="search-inp">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          onChange={handleInputSearch}
        />
        <button>
          <img
            src="https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/magnifying-glass-icon.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default Navbar;

import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { productDataGenerator } from "../components/dataGenerator/DataGenerator";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const newData = productDataGenerator();
    var renderData = [];
    for (let i = 0; i < 5; i++) {
      renderData.push(newData[i]);
    }
    setData(renderData);
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  const navigateToProducts = () => {
    navigate("/products");
  };
  return (
    <div className="home">
      <div>
        <div className="home-search-div" onClick={handleClick}>
          <SearchBar />
        </div>
        {open && (
          <div className="home-suggestions">
            <div className="suggestion-heading head1">Latest Trends</div>
            <div className="home-suggestions-tilep">
              {data &&
                data.map((e, i) => {
                  return (
                    <div key={i} className="home-suggestion-tile">
                      <img
                        src={e.img}
                        alt={e.name}
                        onClick={navigateToProducts}
                      />
                      <p onClick={navigateToProducts}>{e.name}</p>
                    </div>
                  );
                })}
            </div>
            <div className="suggestion-heading">Popular Suggestions</div>
            <div className="suggestion-links">
              <div onClick={navigateToProducts}>Striped Shirt Dress</div>
              <div onClick={navigateToProducts}>Satin Shirts</div>
              <div onClick={navigateToProducts}>Denim Jumpsuit</div>
              <div onClick={navigateToProducts}>Leather Dresses</div>
              <div onClick={navigateToProducts}>Solid Tshirts</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

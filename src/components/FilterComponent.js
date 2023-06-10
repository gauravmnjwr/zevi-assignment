import React, { useState } from "react";

function FilterComponent() {
  //   const [isBrandOpen, setIsBrandOpen] = useState(false);
  //   const [isPriceOpen, setIsPriceOpen] = useState(false);
  //   const [isRatingOpen, setIsRatingOpen] = useState(false);
  //   "adidas", "nike", "nb", "puma", "yonex";
  return (
    <div className="filter-main">
      <div className="filter-title"> Search Results</div>
      <div className="brand-range">
        <div className="filter-heading">
          <div>Brand</div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png"
              alt="down-arrow"
            />
          </div>
        </div>
        <div className="tiles">
          <div>
            <input type="checkbox" id="adidas" name="adidas" value="adidas" />
            <label for="adidas"> Adidas</label>
          </div>
          <div>
            <input type="checkbox" id="nike" name="nike" value="nike" />
            <label for="nike"> Nike</label>
          </div>
          <div>
            <input type="checkbox" id="nb" name="nb" value="nb" />
            <label for="nb"> NB</label>
          </div>
          <div>
            <input type="checkbox" id="Puma" name="Puma" value="Puma" />
            <label for="Puma"> Puma</label>
          </div>
          <div>
            <input type="checkbox" id="Yonex" name="Yonex" value="Yonex" />
            <label for="Yonex"> Yonex</label>
          </div>
        </div>
      </div>
      <div className="price-range">
        <div className="filter-heading">
          <div>Price</div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png"
              alt="down-arrow"
            />
          </div>
        </div>
        <div className="tiles price-inp">
          <div>
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
          </div>
          <div>
            <input type="checkbox" name="under-50" id="under-50" />
            <label for="under-50"> Under $50</label>
          </div>
          <div>
            <input type="checkbox" name="over-50" id="over-50" />
            <label for="over-50"> 50$ To 100$ </label>
          </div>
        </div>
      </div>
      <div className="rating-range">
        <div className="filter-heading">
          <div>Rating</div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png"
              alt="down-arrow"
            />
          </div>
        </div>
        <div className="tiles price-inp"></div>
      </div>
    </div>
  );
}

export default FilterComponent;

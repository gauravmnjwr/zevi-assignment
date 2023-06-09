import React, { useState } from "react";
import { productDataGenerator } from "./dataGenerator/DataGenerator";
import Rating from "./Rating";

function ProductCard() {
  const [data, setData] = useState(productDataGenerator());
  const [heart, setHeart] = useState(true);
  console.log(data);
  return (
    <div className="all-cards">
      {data.map((d, i) => {
        return (
          <div key={d.id} className="main-card">
            <div className="p-image">
              <div className="abs-heart">
                <i class="fa-regular fa-heart" style={{ color: "#ffffff" }}></i>
              </div>
              <img src={d.img} alt="" />
            </div>
            <div className="p-name">{d.name}</div>
            <div className="p-price">
              <div className="p-original">${d.originalPrice} </div>
              &nbsp; &nbsp;
              <div className="p-selling">${d.sellingPrice}</div>
            </div>
            <div className="p-rating">
              <div>
                <Rating value={d.rating} />
              </div>
              <div>({d.reviews})</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCard;

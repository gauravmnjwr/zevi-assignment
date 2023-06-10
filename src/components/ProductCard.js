import RatingComponent from "./RatingComponent";
import FilterComponent from "./FilterComponent";

function ProductCard({ data }) {
  //   console.log(data);
  return (
    <div className="main-page">
      <FilterComponent />
      <div className="all-cards">
        {data.map((d, i) => {
          return (
            <div key={d.id} className="main-card">
              <div className="p-image">
                <div className="abs-heart">
                  <i
                    className="fa-regular fa-heart"
                    style={{ color: "#ffffff" }}
                  ></i>
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
                  <RatingComponent value={d.rating} />
                </div>
                <div>({d.reviews})</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductCard;

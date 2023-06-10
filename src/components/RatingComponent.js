import React from "react";

function Rating({ value, text, color }) {
  return (
    <span className="rating">
      <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? "fas fa-star fa-fw"
              : value >= 0.5
              ? "fas fa-star-half-alt fa-fw"
              : "far fa-star fa-fw"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 2
              ? "fas fa-star fa-fw"
              : value >= 1.5
              ? "fas fa-star-half-alt fa-fw"
              : "far fa-star fa-fw"
          }
        ></i>
      </span>{" "}
      <span>
        <i
          style={{ color }}
          className={
            value >= 3
              ? "fas fa-star fa-fw"
              : value >= 2.5
              ? "fas fa-star-half-alt fa-fw"
              : "far fa-star fa-fw"
          }
        ></i>
      </span>{" "}
      <span>
        <i
          style={{ color }}
          className={
            value >= 4
              ? "fas fa-star fa-fw"
              : value >= 3.5
              ? "fas fa-star-half-alt fa-fw"
              : "far fa-star fa-fw"
          }
        ></i>
      </span>{" "}
      <span>
        <i
          style={{ color }}
          className={
            value >= 5
              ? "fas fa-star fa-fw"
              : value >= 4.5
              ? "fas fa-star-half-alt fa-fw"
              : "far fa-star fa-fw"
          }
        ></i>
      </span>
    </span>
  );
}

Rating.defaultProps = {
  color: "#f8e825",
};

// Rating.propTypes = {
//   value: PropTypes.number.isRequired,
//   text: PropTypes.string.isRequired,
//   color: PropTypes.string,
// };

export default Rating;
import React, { useState } from "react";
import Hotel from "./hotel";
import "./filter.css"; // import separate filter CSS

export default function Filter({ hotels }) {
  const [minRating, setMinRating] = useState(); // state inside Filter

  return (
    <div>
      {/* Filter dropdown */}
      <div className="filter-section">
        <label htmlFor="ratingFilter">Filter by Rating: </label>
        <select
          id="ratingFilter"
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
        >
          <option value={1}>1 ⭐ & above</option>
          <option value={2}>2 ⭐ & above</option>
          <option value={3}>3 ⭐ & above</option>
          <option value={4}>4 ⭐ & above</option>
          <option value={5}>5 ⭐ & above</option>
        </select>
      </div>

      {/* Filtered Hotels */}
      <div className="hotel-container">
        {hotels.map((hotel, index) =>
          hotel.rating >= minRating ? <Hotel key={index} hotels={[hotel]} /> : null
        )}
      </div>
    </div>
  );
}

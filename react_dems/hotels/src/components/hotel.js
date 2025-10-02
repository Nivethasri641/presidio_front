import React from 'react';
import './hotel.css';

export default function Hotel({ hotels }) {
  return (
    <div className="d-flex">
      {hotels.map((hotel) => (
        <div className="hotel-card" key={hotel._id}>
          <h2>{hotel.name}</h2>
          <p>{hotel.location}</p>
          <p>{hotel.address}</p>
          <p>Rating: {hotel.rating} ⭐</p>
          <p>{hotel.contact_number}</p>
          <p>{hotel.email}</p>
          <button>Book Now</button>
        </div>
      ))}
    </div>
  );
}
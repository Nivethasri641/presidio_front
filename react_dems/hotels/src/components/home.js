import React from "react";
import Hotel from "./hotel";
import Filter from "./filters";
import Register from "./register";
import "./home.css";

export default function Home({ hotels }) {
  return (
    <div className="home-container">
      <div className="filter-wrapper">
        <Filter hotels={hotels} />
      </div>

      <div className="hotel-wrapper">
        <Hotel hotels={hotels} />
      </div>

      <div className="register-wrapper">
        <Register hotels={hotels} />
      </div>
    </div>
  );
}

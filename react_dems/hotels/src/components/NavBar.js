import React from "react";
import "./NavBar.css";

export default function NavBar({ searchTerm, setSearchTerm }) {
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Grand Booking🏯</a>
          <form className="d-flex" role="search" onSubmit={e => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
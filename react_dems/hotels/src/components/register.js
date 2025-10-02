import React, { useState } from "react";
import axios from "axios";
import "./register.css"; // import CSS file

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    address: "",
    rating: "",
    email: "",
    contact_number: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/hotels", formData);
      setMessage("✅ Hotel registered successfully!");
      setFormData({
        name: "",
        location: "",
        address: "",
        rating: "",
        email: "",
        contact_number: ""
      });
      console.log("Hotel Added:", res.data);
    } catch (err) {
      console.error("Error:", err);
      setMessage("❌ Error registering hotel");
    }
  };

  return (
    <div className="register-container">
      <h2>Register a New Hotel</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          name="name"
          placeholder="Hotel Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          step="0.1"
          name="rating"
          placeholder="Rating (e.g. 4.5)"
          value={formData.rating}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Hotel Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact_number"
          placeholder="Contact Number"
          value={formData.contact_number}
          onChange={handleChange}
          required
        />
        <button type="submit">Register Hotel</button>
      </form>
      {message && <p className="register-message">{message}</p>}
    </div>
  );
}

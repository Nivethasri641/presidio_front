import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/home";
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [hotels, setHotels] = useState([]);       // will be filled by API
  const [searchTerm, setSearchTerm] = useState(""); 
  const [minRating, setMinRating] = useState(1);  // default filter = 1⭐ and above

  // Fetch hotel data from backend
  useEffect(() => {
    axios.get("http://localhost:3000/api/hotels")
      .then(res => {
        if (Array.isArray(res.data)) {
          setHotels(res.data);
        } else {
          console.error("Unexpected API response:", res.data);
        }
      })
      .catch(err => console.log("Error in loading:", err));
  }, []);

  // Apply search + rating filter together
  const filteredHotels = hotels.filter(hotel =>
    hotel.name &&
    hotel.name.toLowerCase().startsWith(searchTerm.toLowerCase()) &&
    hotel.rating >= minRating
  );

  return (
    <BrowserRouter>
      {/* Pass searchTerm and rating filter control to NavBar */}
      <NavBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        minRating={minRating}
        setMinRating={setMinRating}
      />

      <Routes>
        <Route path="/home" element={<Home hotels={filteredHotels} />} />
        <Route path="/" element={<Home hotels={filteredHotels} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

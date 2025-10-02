// src/components/Home.js
import React from "react";
import Hotel from "./hotel";
import Filter from "./filters";
import Register from "./register"

export default function Home({ hotels }) {
  return (
    <div>
      <Hotel hotels={hotels} />
      <Filter hotels={hotels} />
      <Register hotels={hotels}/>
    </div>
  );
}

import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import { useEffect } from "react";  
import { useState } from "react";

function App() {

  const [listings, setListings] = useState([])
  const [newListings, setNewListings] = useState()

useEffect(() => {
  fetch("http://localhost:6001/listings")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    setListings(data)
  })
}, []);

function searchChange(data) {
  console.log(data)
  const filtered = listings.filter(listing => listing.description === data )
  
  setNewListings(filtered)
}

console.log(listings)

  return (
    <div className="app">
      <Header searchChange={searchChange}/>
      <ListingsContainer newListings={newListings} listings={listings} />
    </div>
  );
}

export default App;

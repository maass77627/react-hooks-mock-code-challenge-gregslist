import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({listings, newListings}) {
  return (
    <main>
      <ul className="cards">
        {newListings ? newListings.map(listing => <ListingCard id={listing.id} key={listing.id} description={listing.description} image={listing.image} location={listing.location}/> ) : listings.map(listing => <ListingCard id={listing.id} key={listing.id} description={listing.description} image={listing.image} location={listing.location}/> )}
      </ul>
    </main>
  );
}

export default ListingsContainer;

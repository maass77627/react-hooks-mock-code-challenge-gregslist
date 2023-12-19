import React from "react";
import {useState} from "react";

function Search({searchChange}) {

  const [searchData, setSearchData] = useState("hello")

  function handleChange(event) {
    console.log(event.target.value)
    setSearchData(event.target.value)
    console.log(searchData)
  }

  function handleSubmit(e) {
    e.preventDefault();
    //console.log(e.target.value)
    //setSearchData(e.target.value)
    console.log(searchData)
    searchChange(searchData)

    //fetch(`http://localhost:6001/listings`)
    //.then((response) => response.json())
    //.then((data) => { console.log(data)})
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchData}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

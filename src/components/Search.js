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
    console.log(searchData)
    searchChange(searchData)
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

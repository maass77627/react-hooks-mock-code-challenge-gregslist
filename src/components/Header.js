import React from "react";
import Search from "./Search";

function Header({searchChange}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchChange={searchChange}/>
    </header>
  );
}

export default Header;

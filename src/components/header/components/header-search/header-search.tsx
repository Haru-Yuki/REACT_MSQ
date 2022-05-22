import React from "react";
import "./header-search.scss";

const HeaderSearch = () => {
  return (
      <>
        <div className={"grid-container header-search-wrapper"}>
          <div className={"grid-x grid-padding-x"}>
            <div className={"medium-8 cell"}>
                <input className={"header-search-input"} type="text" placeholder="Search a dungeon" />
            </div>
            <button className="submit button medium-1 header-search-button">Search</button>
          </div>
        </div>
      </>
  )
};

export default HeaderSearch;
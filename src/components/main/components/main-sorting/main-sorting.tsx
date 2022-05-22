import * as React from "react";
import "./main-sorting.scss";


const MainSorting = () => {
    return (
        <>
            <div className={"medium-2 cell main-sorting"}>
                <div className={"main-sorting-label"}>Sort by:</div>
                <select className={"main-sorting-select"}>
                    <option value="level">Level &#8595;</option>
                    <option value="level">Level &#8593;</option>
                </select>
            </div>
        </>
    )
};

export default MainSorting;

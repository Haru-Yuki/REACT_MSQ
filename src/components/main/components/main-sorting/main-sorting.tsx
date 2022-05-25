import * as React from "react";
import "./main-sorting.scss";
import {useDispatch} from "react-redux";
import {DUNGEONS_FILTER, DUNGEONS_SORTING} from "../../../../store/actions";
import {set} from "lodash";


const MainSorting = () => {
    const dispatch = useDispatch();

    return (
        <>
            <div className={"medium-2 cell main-sorting"}>
                <div className={"main-sorting-label"}>Sort by:</div>
                <select onChange={(event) => dispatch(setSorting(event))} className={"main-sorting-select"}>
                    <option value="level_asc">Level &#8595;</option>
                    <option value="level_desc">Level &#8593;</option>
                </select>
            </div>
        </>
    )
};

const setSorting = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sorting = event.target.value;

    return {
        type: DUNGEONS_SORTING,
        payload: {sorting: sorting}
    }
}

export default MainSorting;

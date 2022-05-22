import React from "react";
import "./main-filter.scss";
import {useDispatch} from "react-redux";
import {DUNGEONS_FILTER} from "../../../../store/actions";

const MainFilter = () => {
    const dispatch = useDispatch();

    return (
        <>
            <fieldset className="medium-7 cell">
                <input onChange={(event) => dispatch(setFilter(event))} type="radio" name={"main-filter"} className={"main-filter-radio"} data-filter={'all'} id={"filterShowAll"} defaultChecked />
                <label className={"main-filter-label"} htmlFor={"filterShowAll"}>Show All</label>

                <input onChange={(event) => dispatch(setFilter(event))} type="radio" name={"main-filter"} className={"main-filter-radio"} data-filter={'ARR'} id={"filterARR"} />
                <label className={"main-filter-label"} htmlFor={"filterARR"}>ARR</label>

                <input onChange={(event) => dispatch(setFilter(event))} type="radio" name={"main-filter"} className={"main-filter-radio"} data-filter={'Heavensward'} id={"filterHeavensward"} />
                <label className={"main-filter-label"} htmlFor={"filterHeavensward"}>Heavensward</label>

                <input onChange={(event) => dispatch(setFilter(event))} type="radio" name={"main-filter"} className={"main-filter-radio"}  data-filter={'Stormblood'} id={"filterStormblood"} />
                <label className={"main-filter-label"} htmlFor={"filterStormblood"}>Stormblood</label>

                <input onChange={(event) => dispatch(setFilter(event))} type="radio" name={"main-filter"} className={"main-filter-radio"}  data-filter={'Shadowbringers'} id={"filterShadowbringers"} />
                <label className={"main-filter-label"} htmlFor={"filterShadowbringers"}>Shadowbringers</label>

                <input onChange={(event) => dispatch(setFilter(event))} type="radio" name={"main-filter"} className={"main-filter-radio"}  data-filter={'Endwalker'} id={"filterEndwalker"} />
                <label className={"main-filter-label"} htmlFor={"filterEndwalker"}>Endwalker</label>
            </fieldset>
        </>
    )
};

const setFilter = (event: any) => {
    const filter = event.nativeEvent.target.dataset.filter;

    return {
        type: DUNGEONS_FILTER,
        payload: {filter: filter}
    }
}

export default MainFilter;

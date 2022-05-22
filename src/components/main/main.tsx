import React from "react";
import "./main.scss";

import MainFilter from "./components/main-filter/main-filter";
import MainSorting from "./components/main-sorting/main-sorting";
import DungeonList from "../dungeon-list/dungeon-list";
import DungeonCounter from "../dungeon-list/dungeon-counter/dungeon-counter";

const Main = () => {
    return (
        <>
            <main className={"main"}>
                <div className={"grid-container"}>
                    <div className={"grid-x main-wrapper"}>
                        <MainFilter />
                        <MainSorting />
                    </div>
                    <div className={"main-divider"} />
                    <DungeonCounter />
                    <div className={"grid-x main-dungeons-wrapper"}>
                        <DungeonList />
                    </div>
                </div>
            </main>
        </>
    )
};

export default Main;

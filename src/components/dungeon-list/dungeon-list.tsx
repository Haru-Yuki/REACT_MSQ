import React, {useEffect, useState} from "react";
import "./dungeon-list.scss";

import DungeonCard from "./dungeon-card/dungeon-card";
import {useDispatch, useSelector} from "react-redux";
import {DUNGEONS, DUNGEONS_FOUND} from "../../store/actions";
import axios from "axios";
import {replace} from "lodash";
import {getAllDungeonsAPI, setDungeonCounter, setDungeons} from "../../api/dungeons/dungeons-api";
import Dungeon from "../../models/dungeon";

const DungeonList = () => {
    const dispatch = useDispatch();
    const storeDungeonsFilter = useSelector((state: any) => state.dungeonsFilter);
    const storeDungeonsSorting = useSelector((state: any) => state.dungeonsSorting);
    const storeDungeons = useSelector((state: any) => state.dungeons);

    useEffect(() => {
        getAllDungeonsAPI(storeDungeonsFilter, storeDungeonsSorting)
            .then((data: any) => {
                dispatch(setDungeonCounter(data.totalAmount));
                dispatch(setDungeons(data.data));
            });
    }, [storeDungeonsFilter, storeDungeonsSorting]);

    return (
        <>
            {storeDungeons.map((dungeon: Dungeon) =>
                <DungeonCard
                    imageLink={dungeon.imageLink}
                    name={dungeon.name}
                    patchName={dungeon.patchName}
                    level={dungeon.level}
                    description={dungeon.description}
                    key={dungeon.name}
                />
            )}
        </>
    )
};

export default DungeonList;

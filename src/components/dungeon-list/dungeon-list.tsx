import React, {useEffect, useState} from "react";
import "./dungeon-list.scss";

import DungeonCard from "./dungeon-card/dungeon-card";
import {useDispatch, useSelector} from "react-redux";
import {DUNGEONS_FOUND} from "../../store/actions";
import axios from "axios";
import {replace} from "lodash";

const DungeonList = () => {
    const dispatch = useDispatch();
    const storeDungeonsFilter = useSelector((state: any) => state.dungeonsFilter);
    const storeDungeonsSorting = useSelector((state: any) => state.dungeonsSorting);

    const [dungeons, setDungeons] = useState([]);

    useEffect(() => {
        getAllDungeons(storeDungeonsFilter, storeDungeonsSorting).then((data: any) => dispatch(setDungeonCounter(data.totalAmount)));
    }, [storeDungeonsFilter, storeDungeonsSorting]);

    const getAllDungeons = async (dungeonsFilter: string, dungeonsSorting: string) => {
        const dungeons = await axios.get(`http://localhost:8080/dungeons?filter=${dungeonsFilter}&sort=${dungeonsSorting}`);

        setDungeons(dungeons.data.data || []);
        return dungeons;
    };

    return (
        <>
            {dungeons.map((dungeon) =>
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

const setDungeonCounter = (totalAmount: number) => {
    return {
        type: DUNGEONS_FOUND,
        payload: {
            totalAmount: totalAmount
        }
    }
};

export default DungeonList;

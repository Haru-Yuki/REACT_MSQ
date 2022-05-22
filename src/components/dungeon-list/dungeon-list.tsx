import React, {useEffect, useState} from "react";
import "./dungeon-list.scss";

import DungeonCard from "./dungeon-card/dungeon-card";
import {useDispatch, useSelector} from "react-redux";
import {DUNGEONS_FOUND} from "../../store/actions";

const DungeonList = () => {
    const dispatch = useDispatch();
    const storeDungeonsFilter = useSelector((state: any) => state.dungeonsFilter);

    const [dungeons, setDungeons] = useState([]);

    useEffect(() => {
        getAllDungeons(storeDungeonsFilter).then((data: any) => dispatch(setDungeonCounter(data.totalAmount)));
    }, [storeDungeonsFilter]);

    const getAllDungeons = async (dungeonsFilter: string) => {
        try {
            const response = await fetch(`http://localhost:4000/dungeons/?filter=${dungeonsFilter}`);
            const dungeons = await response.json();

            setDungeons(dungeons.data);
            return dungeons;
        } catch (error) {
            throw new Error(error);
        }
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
                    key={dungeon.id}
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

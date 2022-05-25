import React, {useMemo} from "react";
import "./dungeon-card.scss";
import Dungeon from "../../../models/dungeon";
import {SHOW_DUNGEON_INFO} from "../../../store/actions";
import {useDispatch} from "react-redux";

const DungeonCard = (props : {imageLink: string, name: string, patchName: string, level: number, description: string}) => {
    const dispatch = useDispatch();
    const dungeonInfo = useMemo(() => prepareDungeonInfo(props), [props]);

    return (
        <div onClick={() => dispatch(setShowDungeonInfo(dungeonInfo))} className={"dungeon-card"}>
            <img className={"dungeon-card-image"} src={dungeonInfo.imageLink} alt={`${dungeonInfo.name} image`} />
            <h3 className={"dungeon-card-name"}>{dungeonInfo.name}</h3>
            <span className={"dungeon-card-level"}>Lvl.{dungeonInfo.level}</span>
            <span className={"dungeon-card-patchName"}>{dungeonInfo.patchName}</span>
        </div>
    )
};

const prepareDungeonInfo = (data: Dungeon) => {
    return {
        imageLink: data.imageLink,
        name: data.name,
        patchName: data.patchName,
        level: data.level,
        description: data.description
    }
}

const setShowDungeonInfo = (data: Dungeon) => {
    window.scrollTo({top: 0, behavior: 'smooth'});

    return {
        type: SHOW_DUNGEON_INFO,
        payload: prepareDungeonInfo(data)
    }
}

export default DungeonCard;

import React, {useMemo, useState} from "react";
import "./dungeon-card.scss";
import Dungeon from "../../../models/dungeon";
import {SHOW_DUNGEON_INFO} from "../../../store/actions";
import {useDispatch, useSelector} from "react-redux";
import Modal from "../../global/modal/modal";
import {
    deleteDungeonAPI,
    editDungeonAPI,
    getAllDungeonsAPI,
    setDungeonCounter,
    setDungeons
} from "../../../api/dungeons/dungeons-api";

const DungeonCard = (props : {imageLink: string, name: string, patchName: string, level: number, description: string}) => {
    const dispatch = useDispatch();
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const storeDungeonsFilter = useSelector((state: any) => state.dungeonsFilter);
    const storeDungeonsSorting = useSelector((state: any) => state.dungeonsSorting);
    const dungeonInfo = useMemo(() => prepareDungeonInfo(props), [props]);

    const deleteDungeon = (dungeonName: string) => {
        deleteDungeonAPI(dungeonName).then(() =>
            getAllDungeonsAPI(storeDungeonsFilter, storeDungeonsSorting)
                .then((data: any) => {
                    dispatch(setDungeonCounter(data.totalAmount));
                    dispatch(setDungeons(data.data));
                })
        );
        setShowDeleteModal(false)
    };

    const editDungeon = (dungeon: Dungeon) => {
        editDungeonAPI({...dungeon, name: dungeonInfo.name}).then(() =>
            getAllDungeonsAPI(storeDungeonsFilter, storeDungeonsSorting)
                .then((data: any) => {
                    dispatch(setDungeonCounter(data.totalAmount));
                    dispatch(setDungeons(data.data));
                })
        );
        setShowEditModal(false)
    };

    const handleDelete = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        event.stopPropagation();
        setShowDeleteModal(true);
    };

    const handleEdit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        event.stopPropagation();
        setShowEditModal(true);
    };

    return (
        <>
            <div onClick={() => dispatch(setShowDungeonInfo(dungeonInfo))} className={"dungeon-card"}>
                <img className={"dungeon-card-image"} src={dungeonInfo.imageLink} alt={`${dungeonInfo.name} image`} />
                <h3 className={"dungeon-card-name"}>{dungeonInfo.name}</h3>
                <span className={"dungeon-card-level"}>Lvl.{dungeonInfo.level}</span>
                <span className={"dungeon-card-patchName"}>{dungeonInfo.patchName}</span>
                <button onClick={(event) => handleDelete(event)} className={"dungeon-card-button dungeon-card-button__delete"}>
                    <i className="fa-solid fa-trash-can"> </i>
                </button>
                <button onClick={(event) => handleEdit(event)} className={"dungeon-card-button dungeon-card-button__edit"}>
                    <i className="fa-solid fa-pencil"> </i>
                </button>
            </div>
            {showDeleteModal ? <Modal isDelete={true} onClose={() => setShowDeleteModal(false)} onConfirm={() => deleteDungeon(dungeonInfo.name)} name={dungeonInfo.name} /> : null}
            {showEditModal ? <Modal isDelete={false} isEdit={true} onClose={() => setShowEditModal(false)} onConfirm={editDungeon} dungeon={dungeonInfo} /> : null}
        </>
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

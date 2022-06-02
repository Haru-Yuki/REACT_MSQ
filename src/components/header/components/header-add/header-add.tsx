import React, {useState} from "react";
import "./header-add.scss";

import Modal from "../../../global/modal/modal";
import {
    addDungeonAPI,
    deleteDungeonAPI,
    getAllDungeonsAPI,
    setDungeonCounter,
    setDungeons
} from "../../../../api/dungeons/dungeons-api";
import Dungeon from "../../../../models/dungeon";
import {useDispatch, useSelector} from "react-redux";

const HeaderAdd = () => {
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);
    const storeDungeonsFilter = useSelector((state: any) => state.dungeonsFilter);
    const storeDungeonsSorting = useSelector((state: any) => state.dungeonsSorting);

    const addDungeon = (dungeon: Dungeon) => {
        addDungeonAPI(dungeon).then(() =>
            getAllDungeonsAPI(storeDungeonsFilter, storeDungeonsSorting)
                .then((data: any) =>    {
                    dispatch(setDungeonCounter(data.totalAmount));
                    dispatch(setDungeons(data.data));
                })
        );
        setOpenModal(false);
    };

    return (
        <>
            <button onClick={() => setOpenModal(true)} className="hollow button medium-1 header-add-button">+ Add a Dungeon</button>
            {openModal ? <Modal isDelete={false} onClose={() => setOpenModal(false)} onConfirm={addDungeon} /> : null}
        </>
    )
}

export default HeaderAdd;

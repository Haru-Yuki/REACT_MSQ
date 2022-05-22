import React, {useState} from "react";
import "./header-add.scss";

import Modal from "../../../global/modal/modal";

const HeaderAdd = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <button onClick={() => setOpenModal(true)} className="hollow button medium-1 header-add-button">+ Add a Dungeon</button>
            {openModal ? <Modal isDelete={false} onClose={() => setOpenModal(false)} /> : null}
        </>
    )
}

export default HeaderAdd;

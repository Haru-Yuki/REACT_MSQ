import React, {MouseEventHandler, useEffect} from "react";
import "./modal.scss";

const Modal = (props: {isDelete: boolean, onClose: MouseEventHandler<HTMLButtonElement>}) => {
    useEffect(() => {
        document.body.classList.add('modal-open');
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);

    return <div className="modal-container modal-container--active" id="modal-container">
                { props.isDelete ?
                renderDeleteModal(props.onClose) :
                renderDungeonModal(props.onClose) };
            </div>
}

const renderDungeonModal = (onClose: MouseEventHandler<HTMLButtonElement>) => {
    return (
        <div className="modal-wrapper">
            <button onClick={onClose} className="modal-closeBtn">X</button>
            <h2 className="modal-header">Add Dungeon</h2>
            <form className="modal-form">
                <div className="grid-container modal-form-wrapper">
                    <div className="grid-x grid-padding-x">
                        <div className="medium-10 cell">
                            <label className="modal-form-label">Name
                                <input className="modal-form-input" type="text" placeholder="Sastasha" />
                            </label>
                        </div>
                        <div className="medium-2 cell">
                            <label className="modal-form-label">Level
                                <input className="modal-form-input" type="number" min={15} max={90} placeholder="15" />
                            </label>
                        </div>
                    </div>
                    <div className="grid-x grid-padding-x">
                        <div className="medium-10 cell">
                            <label className="modal-form-label">Wiki url
                                <input className="modal-form-input" type="url" placeholder="https://ffxiv.consolegameswiki.com/wiki/Dungeons/" />
                            </label>
                        </div>
                        <div className="medium-2 cell">
                            <label className="modal-form-label">Patch
                                <select className="modal-form-input">
                                    <option value="default"> </option>
                                    <option value="2.0">2.0</option>
                                    <option value="2.1">2.1</option>
                                    <option value="2.2">2.2</option>
                                    <option value="2.3">2.3</option>
                                    <option value="2.4">2.4</option>
                                    <option value="2.5">2.5</option>
                                    <option value="3.0">3.0</option>
                                    <option value="3.1">3.1</option>
                                    <option value="3.2">3.2</option>
                                    <option value="3.3">3.3</option>
                                    <option value="3.4">3.4</option>
                                    <option value="3.5">3.5</option>
                                    <option value="4.0">4.0</option>
                                    <option value="4.1">4.1</option>
                                    <option value="4.2">4.2</option>
                                    <option value="4.3">4.3</option>
                                    <option value="4.4">4.4</option>
                                    <option value="4.5">4.5</option>
                                    <option value="5.0">5.0</option>
                                    <option value="5.1">5.1</option>
                                    <option value="5.2">5.2</option>
                                    <option value="5.3">5.3</option>
                                    <option value="5.4">5.4</option>
                                    <option value="5.5">5.5</option>
                                    <option value="6.0">6.0</option>
                                    <option value="6.1">6.1</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="grid-x grid-padding-x">
                        <div className="medium-10 cell">
                            <label className="modal-form-label">Unlock quest
                                <input className="modal-form-input" type="text" placeholder="It's Probably Pirates" />
                            </label>
                        </div>
                        <div className="medium-2 cell">
                            <label className="modal-form-label">Ilevel
                                <input className="modal-form-input" type="number" min={0} max={600} placeholder="-" />
                            </label>
                        </div>
                    </div>
                    <div className="medium-2 cell">
                        <input id="isMsqCheck" type="checkbox" className="modal-form-checkbox" /><label className="modal-form-label" htmlFor="isMsqCheck">MSQ</label>
                    </div>
                    <div className="grid-x grid-padding-x">
                        <div className="medium-12 cell">
                            <label className="modal-form-label">
                                In-game description
                                <textarea className="modal-form-input modal-form-input--textarea" rows={7} />
                            </label>
                        </div>
                    </div>
                </div>
            </form>
            <button type={"submit"} className={"submit success button modal-confirm"}>Confirm</button>
        </div>
    )
}

const renderDeleteModal = (onClose: MouseEventHandler<HTMLButtonElement>) => {
    return (
        <div className={"modal-wrapper"}>
            <button onClick={onClose} className={"modal-closeBtn"}>X</button>
            <h2 className={"modal-header"}>Delete Dungeon</h2>
            <p className={"modal-text"}>Are you sure you want to delete dungeon?</p>
            <button type={"submit"} className={"submit success button modal-confirm"}>Confirm</button>
        </div>
    )
}
export default Modal;

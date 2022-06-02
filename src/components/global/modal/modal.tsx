import React, {MouseEventHandler, useEffect} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./modal.scss";
import Dungeon from "../../../models/dungeon";

const Modal = (props: {isDelete: boolean, onClose: MouseEventHandler<HTMLButtonElement>, onConfirm?: any, name?: string}) => {
    const { register, handleSubmit } = useForm<Dungeon>();

    useEffect(() => {
        document.body.classList.add('modal-open');
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);

    return <div className="modal-container modal-container--active" id="modal-container">
                { props.isDelete ?
                renderDeleteModal(props.onClose, props.onConfirm, props.name) :
                renderDungeonModal(props.onClose, props.onConfirm, handleSubmit, register) };
            </div>
}

const renderDungeonModal = (onClose: MouseEventHandler<HTMLButtonElement>, onConfirm: any, handleSubmit: any, register: any) => {
    return (
        <div className="modal-wrapper">
            <button onClick={onClose} className="modal-closeBtn">X</button>
            <h2 className="modal-header">Add Dungeon</h2>
            <form onSubmit={handleSubmit(onConfirm)} className="modal-form">
                <div className="grid-container modal-form-wrapper">
                    <div className="grid-x grid-padding-x">
                        <div className="medium-10 cell">
                            <label className="modal-form-label">Name
                                <input className="modal-form-input" type="text" placeholder="Sastasha" {...register("name")} />
                            </label>
                        </div>
                        <div className="medium-2 cell">
                            <label className="modal-form-label">Level
                                <input className="modal-form-input" type="number" min={15} max={90} placeholder="15" {...register("level")} />
                            </label>
                        </div>
                    </div>
                    <div className="grid-x grid-padding-x">
                        <div className="medium-10 cell">
                            <label className="modal-form-label">Image link
                                <input className="modal-form-input" type="url" placeholder="https://i.imgur.com/Qo4TszB.png" {...register("imageLink")} />
                            </label>
                        </div>
                        <div className="medium-2 cell">
                            <label className="modal-form-label">Patch
                                <input className="modal-form-input" type="text" placeholder="ARR" {...register("patchName")} />
                            </label>
                        </div>
                    </div>
                    <div className="grid-x grid-padding-x">
                        <div className="medium-12 cell">
                            <label className="modal-form-label">
                                In-game description
                                <textarea className="modal-form-input modal-form-input--textarea" rows={7} {...register("description")} />
                            </label>
                        </div>
                    </div>
                </div>
                <button type={"submit"} className={"submit success button modal-confirm"}>Confirm</button>
            </form>
        </div>
    )
}

const renderDeleteModal = (onClose: MouseEventHandler<HTMLButtonElement>, onConfirm: any, name: string) => {
    return (
        <div className={"modal-wrapper modal-wrapper--delete"}>
            <button onClick={onClose} className={"modal-closeBtn"}>X</button>
            <h2 className={"modal-header"}>Delete Dungeon</h2>
            <p className={"modal-text"}>Are you sure you want to delete <span className={"modal-dungeonName"}>{name}</span> dungeon?</p>
            <button onClick={onConfirm} type={"submit"} className={"submit success button modal-confirm"}>Confirm</button>
            <button onClick={onClose} className={"submit alert button modal-confirm"}>Cancel</button>
        </div>
    )
}
export default Modal;

import React, {MouseEventHandler, useEffect} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import "./modal.scss";
import Dungeon from "../../../models/dungeon";
import * as Yup from 'yup';

const Modal = (props: {isDelete: boolean, isEdit?: boolean, onClose: MouseEventHandler<HTMLButtonElement>, onConfirm?: any, name?: string, dungeon?: Dungeon}) => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().when({
            is: () => props.isEdit === true,
            then: Yup.string().notRequired(),
            otherwise: Yup.string().required('Name is required')
        }),
        level: Yup.string()
            .required('Level is required'),
        imageLink: Yup.string()
            .required('Image link is required')
            .matches(/\.(jpe?g|png)$/i, 'The url must be image! (.png/.jpeg)'),
        patchName: Yup.string()
            .required('Patch name is required'),
        description: Yup.string()
            .required('Description is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, formState } = useForm<Dungeon>(formOptions);
    const { errors } = formState;

    useEffect(() => {
        document.body.classList.add('modal-open');
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);

    return <div className="modal-container modal-container--active" id="modal-container">
                { props.isDelete ?
                renderDeleteModal(props.onClose, props.onConfirm, props.name) :
                renderDungeonModal(props.onClose, props.onConfirm, handleSubmit, register, errors, props.isEdit, props.dungeon) };
            </div>
}

const renderDungeonModal = (onClose: MouseEventHandler<HTMLButtonElement>, onConfirm: any, handleSubmit: any, register: any, errors: any, isEdit: boolean, dungeon: Dungeon) => {
    return (
        <div className="modal-wrapper">
            <button onClick={onClose} className="modal-closeBtn">X</button>
            <h2 className="modal-header">Add Dungeon</h2>
            <form onSubmit={handleSubmit(onConfirm)} className="modal-form">
                <div className="grid-container modal-form-wrapper">
                    <div className="grid-x grid-padding-x">
                        <div className="medium-10 cell">
                            <label className="modal-form-label">Name
                                <input className={`modal-form-input ${isEdit ? 'modal-form-input__edit' : ''} ${errors.name ? 'modal-form-input__invalid' : ''}`} type="text" placeholder="Sastasha" {...register("name")} disabled={isEdit} value={isEdit ? dungeon.name: ''} />
                            </label>
                            <div className="modal-form-input-invalid-feedback">{errors.name?.message}</div>
                        </div>
                        <div className="medium-2 cell">
                            <label className="modal-form-label">Level
                                <input className={`modal-form-input ${errors.level ? 'modal-form-input__invalid' : ''}`} type="number" min={15} max={90} placeholder="15" {...register("level")} defaultValue={isEdit ? dungeon.level: ''}/>
                            </label>
                            <div className="modal-form-input-invalid-feedback">{errors.level?.message}</div>
                        </div>
                    </div>
                    <div className="grid-x grid-padding-x">
                        <div className="medium-10 cell">
                            <label className="modal-form-label">Image link
                                <input className={`modal-form-input ${errors.imageLink ? 'modal-form-input__invalid' : ''}`} type="url" placeholder="https://i.imgur.com/Qo4TszB.png" {...register("imageLink")} defaultValue={isEdit ? dungeon.imageLink: ''} />
                            </label>
                            <div className="modal-form-input-invalid-feedback">{errors.imageLink?.message}</div>
                        </div>
                        <div className="medium-2 cell">
                            <label className="modal-form-label">Patch
                                <input className={`modal-form-input ${errors.patchName ? 'modal-form-input__invalid' : ''}`} type="text" placeholder="ARR" {...register("patchName")} defaultValue={isEdit ? dungeon.patchName: ''} />
                            </label>
                            <div className="modal-form-input-invalid-feedback">{errors.patchName?.message}</div>
                        </div>
                    </div>
                    <div className="grid-x grid-padding-x">
                        <div className="medium-12 cell">
                            <label className="modal-form-label">
                                In-game description
                                <textarea className={`modal-form-input modal-form-input__textarea ${errors.description ? 'modal-form-input__invalid' : ''}`} rows={7} {...register("description")} defaultValue={isEdit ? dungeon.description: ''} />
                            </label>
                            <div className="modal-form-input-invalid-feedback">{errors.description?.message}</div>
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

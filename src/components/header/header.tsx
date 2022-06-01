import React, {useEffect, useState} from "react";
import "./header.scss";
import background from './assets/backmain.jpg';

import Logo from "../global/logo/logo";
import HeaderSearch from "./components/header-search/header-search";
import HeaderAdd from "./components/header-add/header-add";
import _ from "lodash";
import {useSelector} from "react-redux";

const Header = () => {
    const storeShowDungeonInfo = useSelector((state: any) => state.showDungeonInfo);
    const [showDungeonInfo, setShowDungeonInfo] = useState(storeShowDungeonInfo);

    useEffect(() => {
        setShowDungeonInfo(storeShowDungeonInfo);
    }, [storeShowDungeonInfo]);

    const renderHeader = () => {
        return <div className={"grid-container"}>
            <Logo />
            <HeaderAdd />
            <HeaderSearch />
        </div>
    }

    const renderDungeonInfo = () => {
        return <div className={"header-dungeon-info"}>
            <Logo className={"dungeon"} />
            <div className={"header-dungeon-card"}>
                <img className={"header-dungeon-card-image"} src={showDungeonInfo.imageLink} alt={`${showDungeonInfo.name} image`} />
                <div className={"header-dungeon-card header-dungeon-card--content"}>
                    <h3 className={"header-dungeon-card-name"}>{showDungeonInfo.name}</h3>
                    <span className={"header-dungeon-card-level"}>Lvl.{showDungeonInfo.level}</span>
                    <span className={"header-dungeon-card-patchName"}>{showDungeonInfo.patchName}</span>
                    <button className={"header-dungeon-card-edit"}>Edit</button>
                    <p className={"header-dungeon-card-description"}>{showDungeonInfo.description}</p>
                </div>
                <button onClick={() => setShowDungeonInfo({})} className="header-dungeon-closeBtn">X</button>
            </div>
        </div>;
    }

    return (
      <>
        <header style={{backgroundImage: `url(${background})`}} className={_.isEmpty(showDungeonInfo) ? "header-wrapper" : "header-wrapper-dungeon"}>
            {_.isEmpty(showDungeonInfo) ?
                renderHeader() :
                renderDungeonInfo()
            }
        </header>
      </>
    )
};

export default Header;

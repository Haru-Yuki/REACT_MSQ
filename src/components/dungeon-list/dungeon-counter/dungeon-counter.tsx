import React, {useEffect, useState} from "react";
import "./dungeon-counter.scss";
import {useSelector} from "react-redux";

const DungeonCounter = () => {
    const storeDungeonsFound = useSelector((state: any) => state.dungeonsFound.totalAmount);
    const [showDungeonsAmount, setShowDungeonsAmount] = useState(storeDungeonsFound);

    useEffect(() => {
        setShowDungeonsAmount(storeDungeonsFound);
    }, [storeDungeonsFound]);

    return (
        <span className={"dungeon-counter"}>{showDungeonsAmount} dungeons found</span>
    )
};

export default DungeonCounter;

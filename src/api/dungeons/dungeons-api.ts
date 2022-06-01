import axios from "axios";
import Dungeon from "../../models/dungeon";
import {DUNGEONS, DUNGEONS_FOUND} from "../../store/actions";

export const getAllDungeonsAPI = async (dungeonsFilter: string, dungeonsSorting: string) => {
    const dungeons = await axios.get(`https://ffmsqroulette.herokuapp.com/dungeons?filter=${dungeonsFilter}&sort=${dungeonsSorting}`);
    return dungeons.data;
};

export const deleteDungeonAPI = async (dungeonName: string) => {
    await axios.delete(`https://ffmsqroulette.herokuapp.com/dungeons/del`, { data: { name: dungeonName } });
};

export const setDungeonCounter = (totalAmount: number) => {
    return {
        type: DUNGEONS_FOUND,
        payload: {
            totalAmount: totalAmount
        }
    }
};

export const setDungeons = (dungeons: Array<Dungeon>) => {
    return {
        type: DUNGEONS,
        payload: {
            dungeons: dungeons
        }
    }
};


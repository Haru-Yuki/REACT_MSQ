import { combineReducers } from 'redux'

import showDungeonInfoReducer from "../features/dungeons/showDungeonInfo";
import dungeonsFoundReducer from "../features/dungeons/dungeonsFound";
import dungeonsFilterReducer from "../features/dungeons/dungeonsFilter";

const rootReducer = combineReducers({
  showDungeonInfo: showDungeonInfoReducer,
  dungeonsFound: dungeonsFoundReducer,
  dungeonsFilter: dungeonsFilterReducer
});

export default rootReducer;

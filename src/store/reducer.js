import { combineReducers } from 'redux'

import showDungeonInfoReducer from "../features/dungeons/showDungeonInfo";
import dungeonsFoundReducer from "../features/dungeons/dungeonsFound";
import dungeonsFilterReducer from "../features/dungeons/dungeonsFilter";
import dungeonsSortingReducer from "../features/dungeons/dungeonsSorting";
import dungeonsReducer from "../features/dungeons/dungeons";

const rootReducer = combineReducers({
  dungeons: dungeonsReducer,
  showDungeonInfo: showDungeonInfoReducer,
  dungeonsFound: dungeonsFoundReducer,
  dungeonsFilter: dungeonsFilterReducer,
  dungeonsSorting: dungeonsSortingReducer
});

export default rootReducer;

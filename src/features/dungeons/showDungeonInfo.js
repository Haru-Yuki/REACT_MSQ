import {SHOW_DUNGEON_INFO} from "../../store/actions";

export default function showDungeonInfoReducer(state = {}, action) {
  switch (action.type) {
    case SHOW_DUNGEON_INFO: {
      return {
          imageLink: action.payload.imageLink,
          name: action.payload.name,
          patchName: action.payload.patchName,
          level: action.payload.level,
          description: action.payload.description
        }
    }
    default:
      return state
  }
}

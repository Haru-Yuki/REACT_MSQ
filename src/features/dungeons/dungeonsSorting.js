import {DUNGEONS_SORTING} from "../../store/actions";

export default function dungeonsSortingReducer(state = 'level_asc', action) {
  switch (action.type) {
    case DUNGEONS_SORTING: {
      return action.payload.sorting
    }
    default:
      return state
  }
}

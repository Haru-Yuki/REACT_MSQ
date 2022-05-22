import {DUNGEONS_FILTER} from "../../store/actions";

export default function dungeonsFilterReducer(state = 'all', action) {
  switch (action.type) {
    case DUNGEONS_FILTER: {
      return action.payload.filter
    }
    default:
      return state
  }
}

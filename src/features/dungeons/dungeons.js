import {DUNGEONS} from "../../store/actions";

export default function dungeonsReducer(state = [], action) {
  switch (action.type) {
    case DUNGEONS: {
      return action.payload.dungeons
    }
    default:
      return state
  }
}

import {DUNGEONS_FOUND} from "../../store/actions";

export default function dungeonsFoundReducer(state = 0, action) {
  switch (action.type) {
    case DUNGEONS_FOUND: {
      return {
        totalAmount: action.payload.totalAmount
      }
    }
    default:
      return state
  }
}

import { SAVE_COMMENT, FETCH_COMMENTS } from "../types";
export default function (state = [], { type, payload }) {
  switch (type) {
    case SAVE_COMMENT:
      return [...state, payload];
      
    case FETCH_COMMENTS:
      const comments = payload.data.map((comment) => comment.name);
      return [...state, ...comments];

    default:
      return state;
  }
}

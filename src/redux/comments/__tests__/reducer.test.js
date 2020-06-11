import commentsReducer from "../reducer";
import { SAVE_COMMENT } from "../types";

it("handles actions os SAVE_COMMENT", () => {
  const message = "New Comment";
  const action = {
    type: SAVE_COMMENT,
    payload: message,
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual([message]);
});

it("handel's action with unknown type", () => {
  const newState = commentsReducer([], { type: "1" });
  
  expect(newState).toEqual([]);
});

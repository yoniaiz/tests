import React from "react";
//test helprs
import { shallow } from "enzyme";
// components
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let component = null;

beforeEach(() => {
  component = shallow(<App />);
});
test("shows a comment box", () => {
  expect(component.find(CommentBox).length).toEqual(1);
});

test("shows a comment list", () => {
  expect(component.find(CommentList).length).toEqual(1);
});

import React from "react";
import { mount } from "enzyme";

import Root from "redux/index";
import CommentList from "components/CommentList";

let component;

const comment1 = "comment1";
const comment2 = "comment2";

beforeEach(() => {
  const initialState = {
    comments: [comment1, comment2],
  };

  component = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("creates one LI per comment", () => {
  expect(component.find("li").length).toEqual(2);
});

it("show the proper text in li", () => {
  expect(component.render().text()).toContain(comment1);
  expect(component.render().text()).toContain(comment2);
});

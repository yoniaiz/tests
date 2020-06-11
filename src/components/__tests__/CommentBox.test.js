import React from "react";
//test helpers
import { mount } from "enzyme";
// components
import CommentBox from "components/CommentBox";
import StoreProvider from "redux/index";

let component;

beforeEach(() => {
  component = mount(
    <StoreProvider>
      <CommentBox />
    </StoreProvider>
  );
});

afterEach(() => {
  component.unmount();
});

test("has a text area and two buttons", () => {
  expect(component.find("textarea").length).toEqual(1);
  expect(component.find("button").length).toEqual(2);
});

describe("the text area", () => {
  const input = "HASDGFAeefsa";
  beforeEach(() => {
    component.find("textarea").simulate("change", {
      target: {
        value: input,
      },
    });
    component.update();
  });

  test("text area can be typed in", () => {
    expect(component.find("textarea").prop("value")).toEqual(input);
  });

  test("text area cleared after submit", () => {
    component.find("form").simulate("submit");
    expect(component.find("textarea").prop("value")).toEqual("");
  });
});

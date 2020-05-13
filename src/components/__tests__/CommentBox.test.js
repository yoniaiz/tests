import React from "react";
//test helprs
import { mount } from "enzyme";
// components
import CommentBox from "components/CommentBox";

let component;

beforeEach(() => {
  component = mount(<CommentBox />);
});

afterEach(() => {
  component.unmount();
});

test("has a text area and a button", () => {
  expect(component.find("textarea").length).toEqual(1);
  expect(component.find("button").length).toEqual(1);
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

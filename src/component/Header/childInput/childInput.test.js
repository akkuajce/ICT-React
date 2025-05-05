import React from "react";
import { shallow } from "enzyme";
import ChildInput from "./childInput";

describe("ChildInput", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ChildInput />);
    expect(wrapper).toMatchSnapshot();
  });
});

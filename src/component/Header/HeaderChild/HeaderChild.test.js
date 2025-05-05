import React from "react";
import { shallow } from "enzyme";
import HeaderChild from "./HeaderChild";

describe("HeaderChild", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<HeaderChild />);
    expect(wrapper).toMatchSnapshot();
  });
});

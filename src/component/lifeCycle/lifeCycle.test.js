import React from "react";
import { shallow } from "enzyme";
import LifeCycle from "./lifeCycle";

describe("LifeCycle", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LifeCycle />);
    expect(wrapper).toMatchSnapshot();
  });
});

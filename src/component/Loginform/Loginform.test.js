import React from "react";
import { shallow } from "enzyme";
import Loginform from "./Loginform";

describe("Loginform", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Loginform />);
    expect(wrapper).toMatchSnapshot();
  });
});

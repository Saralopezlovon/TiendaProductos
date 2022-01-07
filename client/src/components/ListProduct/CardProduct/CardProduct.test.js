import React from "react";
import { shallow } from "enzyme";
import CardProduct from "./CardProduct";

describe("CardProduct", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CardProduct />);
    expect(wrapper).toMatchSnapshot();
  });
});

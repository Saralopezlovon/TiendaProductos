import React from "react";
import { shallow } from "enzyme";
import ListProduct from "./ListProduct";

describe("ListProduct", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListProduct />);
    expect(wrapper).toMatchSnapshot();
  });
});

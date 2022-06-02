import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AboutUs from './AboutUs'

Enzyme.configure({ adapter: new Adapter() })

describe("When AboutUs renders", () => {
    let render;
    beforeEach(() => {
      render = shallow(<AboutUs />);
    });
    it("displays all the divs", () => {
        const renderedText = render.find("div");
        expect(renderedText.length).toEqual(19);
    });
  })
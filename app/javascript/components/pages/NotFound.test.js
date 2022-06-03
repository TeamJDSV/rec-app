import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'

Enzyme.configure({ adapter: new Adapter() })

describe("When NotFound renders", () => {
    let render;
    beforeEach(() => {
      render = shallow(<NotFound />);
    });
    it("displays all the divs", () => {
        const renderedText = render.find("div");
        expect(renderedText.length).toEqual(6);
    });
  })
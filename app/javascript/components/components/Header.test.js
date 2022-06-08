import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

Enzyme.configure({ adapter: new Adapter() })

describe("When Header renders", () => {
    let render;
    beforeEach(() => {
      render = shallow(<Header />);
    });
    it("displays all the Navs", () => {
        const renderedText = render.find("Nav");
        expect(renderedText.length).toEqual(2);
    });
  })
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Singlecard from './Singlecard'

Enzyme.configure({ adapter: new Adapter() })

describe("When Singlecard renders", () => {
    let render;
    beforeEach(() => {
      render = shallow(<Singlecard />);
    });
    it("displays all the divs", () => {
        const renderedText = render.find("div");
        expect(renderedText.length).toEqual(11);
    });
  })
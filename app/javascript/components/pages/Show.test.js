import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Show from './Show'

Enzyme.configure({ adapter: new Adapter() })

describe("When Show renders", () => {
    let render;
    beforeEach(() => {
      render = shallow(<Show />);
    });
    it("displays all the divs", () => {
        const renderedText = render.find("div");
        expect(renderedText.length).toEqual(7);
    });
});
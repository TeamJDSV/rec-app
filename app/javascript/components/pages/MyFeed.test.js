import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MyFeed from './MyFeed'

Enzyme.configure({ adapter: new Adapter() })

describe("When MyFeed renders", () => {
    let render;
    beforeEach(() => {
      render = shallow(<MyFeed />);
    });
    it("displays all the divs", () => {
        const renderedText = render.find("div");
        expect(renderedText.length).toEqual(1);
    });
  })
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

Enzyme.configure({ adapter: new Adapter() })

describe("When App renders", () => {
    let render;
    beforeEach(() => {
      render = shallow(<App />);
    });
    it("displays all the routes", () => {
        const renderedText = render.find("Route");
        expect(renderedText.length).toEqual(10);
    })
})
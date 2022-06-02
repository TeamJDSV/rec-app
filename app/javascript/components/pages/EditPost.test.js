import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import EditPost from './EditPost'

Enzyme.configure({ adapter: new Adapter() })

describe("When EditPost renders", () => {
    let render;
    beforeEach(() => {
      render = shallow(<EditPost />);
    });
    it("displays all the divs", () => {
        const renderedText = render.find("div");
        expect(renderedText.length).toEqual(6);
    });
    it("displays the Form", () => {
        const renderedText = render.find("Form");
        expect(renderedText.length).toEqual(1);
    });
    it("displays all the FormGroups", () => {
        const renderedText = render.find("FormGroup");
        expect(renderedText.length).toEqual(5);
    });
    it("displays all the options", () => {
        const renderedText = render.find("option");
        expect(renderedText.length).toEqual(5);
    });
});
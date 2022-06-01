import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Feed from './Feed';

Enzyme.configure({ adapter: new Adapter() })

describe("When Feed renders", () => {
  it("displays a the cards for the events", () => {
    const feed = shallow(<Feed />)
    const renderedText = feed.find("div").length
    expect(renderedText).toEqual(2)
  })
})
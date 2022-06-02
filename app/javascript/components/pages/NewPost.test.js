import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NewPost from './NewPost'

Enzyme.configure({ adapter: new Adapter() })

describe("When NewPost renders", () => {
    it("displays all the divs", () => {
      const newPost = shallow(<NewPost />)
      const renderedText = newPost.find("div").length
      expect(renderedText).toEqual(7)
    })
  })

  describe("When NewPost renders", () => {
    it("displays all the FormGroups", () => {
      const newPost = shallow(<NewPost />)
      const renderedText = newPost.find("FormGroup").length
      expect(renderedText).toEqual(5)
    })
  })

  describe("When NewPost renders", () => {
    it("displays all the options for rating", () => {
      const newPost = shallow(<NewPost />)
      const renderedText = newPost.find("option").length
      expect(renderedText).toEqual(5)
    })
  })

  describe("When NewPost renders", () => {
    it("displays all the main Form for the entire page", () => {
      const newPost = shallow(<NewPost />)
      const renderedText = newPost.find("Form").length
      expect(renderedText).toEqual(1)
    })
  })
  
import React, { Component } from 'react'
import Header from './components/Header'

class App extends Component {
  render() {
    return(
      <>
        <Header {...this.props} />
      </>
    )
  }
}

export default App
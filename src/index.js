/* 
  NOTE: do not modify the ReactDOM.render function for this React app to run properly
*/

import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    //
    console.log("hello")
  }

  // hello
  // hello 2
  // hello 3

  render() {
    return (
      <button onClick={this.handleClick} style={{ flex: 1 }}>
        ON
      </button>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))

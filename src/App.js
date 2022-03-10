import React, { Component } from 'react'
import Sidebar from './sidebar/Sidebar';

export default class App extends Component {

  render() {
    const message = "Hello there";
    const paragraph = <p>{ message + " Natalie!" }</p>

    return (
      <div>
        { paragraph }
        <Sidebar />
      </div>
    )
  }
}

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      timer: {
        minutes: "25",
        seconds: "00"
      },
      selection: "Session"
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pomodoro Clock</h1>
        </header>
        <div>
          <p>{this.state.selection}</p>
          <p>
            {this.state.timer.minutes}:{this.state.timer.seconds}
          </p>
        </div>
      </div>
    );
  }
}

export default App;

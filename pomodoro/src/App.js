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
    function Timer(props) {
      const { timer, minutes, seconds } = props;

      return (
        <div>
          <p>{timer}</p>
          <p>
            {minutes}:{seconds}
          </p>
        </div>
      );
    }

    const { minutes, seconds, selection } = this.state.timer;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pomodoro Clock</h1>
        </header>
        <Timer timer="Session" minutes={minutes} seconds={seconds} />
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

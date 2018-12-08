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
      break: {
        minutes: "5",
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

    const { minutes, seconds } = this.state.timer;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pomodoro Clock</h1>
        </header>
        <div className="top-panels">
          <Timer
            timer={this.state.selection}
            minutes={minutes}
            seconds={seconds}
          />
          <Timer
            timer="Break"
            minutes={this.state.break.minutes}
            seconds={this.state.break.seconds}
          />
        </div>
      </div>
    );
  }
}

export default App;

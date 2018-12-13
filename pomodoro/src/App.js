import React, { Component } from "react";
import "./App.css";
// eslint-disable-next-line
import MaterialIcon, { colorPalette } from "material-icons-react";
import Timer from "./components/Timer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      timer: {
        minutes: 25,
        seconds: 0
      },
      break: {
        minutes: 5,
        seconds: 0
      },
      selection: "Session"
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    if (this.state.selection === "Session") {
      let count = this.state.timer.minutes + 1;
      console.log("hello");
      this.setState({ timer: { minutes: count } });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pomodoro Clock</h1>
        </header>
        <div className="top-panels">
          <Timer
            timer="Session Length"
            minutes={this.state.timer.minutes}
            id1="session-label"
            id2="session-length"
            onClick={this.increment}
          />
          <Timer
            timer="Break Length"
            minutes={this.state.break.minutes}
            id1="break-label"
            id2="break-length"
          />
        </div>
        <div className="main-timer">
          {/* This will swap between timers */}
          <h2 id="timer-label">{this.state.selection}</h2>
          <p id="time-left">
            {/* This will display the active timer */}
            {this.state.timer.minutes}:
            {this.state.timer.seconds > 9
              ? this.state.timer.seconds
              : "0" + this.state.timer.seconds}
          </p>
        </div>
        <div className="button-area">
          <button id="start_stop" onClick={this.increment}>
            <MaterialIcon icon="play_arrow" />
            <MaterialIcon icon="pause_circle_outline" />
          </button>
          <button id="reset">
            <MaterialIcon icon="loop" />
          </button>
        </div>
        <audio controls src="" id="beep" />
      </div>
    );
  }
}

export default App;

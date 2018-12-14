import React, { Component } from "react";
import "./App.css";
// eslint-disable-next-line
import MaterialIcon, { colorPalette } from "material-icons-react";

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
    this.decrement = this.decrement.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  increment(timer) {
    if (timer.currentTarget.id === "session-increment") {
      let newMins = this.state.timer.minutes + 1;
      const { seconds } = this.state.timer;
      console.log(timer.currentTarget.id);
      this.setState({ timer: { minutes: newMins, seconds: seconds } });
    } else {
      const newMins = this.state.break.minutes + 1;
      const seconds = this.state.break.seconds;
      this.setState({ break: { minutes: newMins, seconds: seconds } });
    }
  }

  decrement(timer) {
    if (timer.currentTarget.id === "session-decrement") {
      let newMins = this.state.timer.minutes - 1;
      const { seconds } = this.state.timer;
      // console.log(timer.currentTarget.id);
      this.setState({ timer: { minutes: newMins, seconds: seconds } });
    } else {
      const newMins = this.state.break.minutes - 1;
      const seconds = this.state.break.seconds;
      this.setState({ break: { minutes: newMins, seconds: seconds } });
    }
  }

  resetTimer() {
    this.setState({ timer: { minutes: 25, seconds: 0 } });
    this.setState({ break: { minutes: 5, seconds: 0 } });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pomodoro Clock</h1>
        </header>
        {/* Top part to hold clock times and adjust buttons */}
        <div className="top-panels">
          <div>
            {/* Session Timer Adjust */}
            <p id="session-label">Session Length</p>
            <p id="session-length">{this.state.timer.minutes}</p>
            <div className="button-style" />
            <button
              id="session-increment"
              className="btn"
              onClick={e => this.increment(e)}
            >
              <MaterialIcon icon="arrow_upward" />
            </button>
            <button
              id="session-decrement"
              className="btn"
              onClick={e => this.decrement(e)}
            >
              <MaterialIcon icon="arrow_downward" />
            </button>
          </div>
          <div>
            {/* Break Timer Adjust */}
            <p id="break-label">Break Length</p>
            <p id="break-length">{this.state.break.minutes}</p>
            <div className="button-style" />
            <button
              id="break-increment"
              className="btn"
              onClick={e => this.increment(e)}
            >
              <MaterialIcon icon="arrow_upward" />
            </button>
            <button
              id="break-decrement"
              className="btn"
              onClick={e => this.decrement(e)}
            >
              <MaterialIcon icon="arrow_downward" />
            </button>
          </div>
        </div>

        {/* Where the clock gets displayed */}
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

        {/* Play/pause and reset buttons */}
        <div className="button-area">
          <button id="start_stop" onClick={this.increment}>
            <MaterialIcon icon="play_arrow" />
            <MaterialIcon icon="pause_circle_outline" />
          </button>
          <button id="reset" onClick={this.resetTimer}>
            <MaterialIcon icon="loop" />
          </button>
        </div>
        <audio controls src="" id="beep" />
      </div>
    );
  }
}

export default App;

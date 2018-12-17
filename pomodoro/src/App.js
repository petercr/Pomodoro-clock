import React, { Component } from "react";
import "./App.css";
// eslint-disable-next-line
import MaterialIcon, { colorPalette } from "material-icons-react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      timer: {
        minutes: 1,
        seconds: 0
      },
      break: {
        minutes: 5,
        seconds: 0
      },
      selection: "Session",
      hasStarted: false,
      initSessionLength: 1,
      initBreakLength: 5
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.startTheClock = this.startTheClock.bind(this);
    this.timer = this.timer.bind(this);
    this.updateClock = this.updateClock.bind(this);
  }

  increment(timer) {
    if (timer.currentTarget.id === "session-increment") {
      const newMins = this.state.timer.minutes + 1;
      const { seconds } = this.state.timer;
      const initSession = this.state.initSessionLength + 1;

      this.setState({ timer: { minutes: newMins, seconds: seconds } });
      this.setState({ initSessionLength: initSession });
    } else {
      const newMins = this.state.initBreakLength + 1;
      this.setState({ initBreakLength: newMins });
    }
  }

  decrement(timer) {
    if (timer.currentTarget.id === "session-decrement") {
      const newMins = this.state.timer.minutes - 1;
      const { seconds } = this.state.timer;
      const initSession = this.state.initSessionLength - 1;

      this.setState({ timer: { minutes: newMins, seconds: seconds } });
      this.setState({ initSessionLength: initSession });
    } else {
      const newMins = this.state.initBreakLength - 1;
      this.setState({ initBreakLength: newMins });
    }
  }

  resetTimer() {
    this.setState({ timer: { minutes: 25, seconds: 0 } });
    this.setState({ break: { minutes: 5, seconds: 0 } });
    this.setState({ initSessionLength: 25 });
    this.setState({ initBreakLength: 5 });
  }

  updateClock(mins, secs) {
    this.setState({ timer: { minutes: mins, seconds: secs } });
  }

  startTheClock() {
    let duration = this.state.timer.minutes * 60;
    duration += this.state.timer.seconds;

    console.log(duration);

    // we don't want to wait a full second before the timer starts
    // this.timer(start, duration);
    //eslint-disable-next-line
    let mainTimer = window.setInterval(this.timer, 1000);
    //eslint-disable-next-line
    let alarmTimer = window.setTimeout(this.alarm, duration * 1000);

    // add event listener for the stop button
    document.querySelector("#reset").addEventListener("click", () => {
      this.alarm();
      window.clearInterval(mainTimer);
      window.clearTimeout(alarmTimer);
    });
  } // end of timer()

  timer() {
    let minutes = this.state.timer.minutes;
    let seconds = this.state.timer.seconds;

    console.log(minutes, seconds);

    if (seconds === 0 && minutes >= 1) {
      minutes--;
      seconds = 59;
      this.setState({ timer: { minutes: minutes, seconds: seconds } });
    } else if (minutes === 0 && seconds === 0) {
      this.alarm();
    } else {
      seconds--;
      this.setState({ timer: { minutes: minutes, seconds: seconds } });
    }

    console.log(minutes, seconds);

    this.updateClock(minutes, seconds);
  }

  alarm() {
    alert("times up");
    window.clearInterval();
  }

  render() {
    const initSession = this.state.initSessionLength;
    const initBreak = this.state.initBreakLength;
    const timerMins = this.state.timer.minutes;
    const timerSecs = this.state.timer.seconds;

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
            <p id="session-length">{initSession}</p>
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
            <p id="break-length">{initBreak}</p>
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
            {timerMins > 9 ? timerMins : "0" + timerMins}:
            {timerSecs > 9 ? timerSecs : "0" + timerSecs}
          </p>
        </div>

        {/* Play/pause and reset buttons */}
        <div className="button-area">
          <button id="start_stop" onClick={() => this.startTheClock(this)}>
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

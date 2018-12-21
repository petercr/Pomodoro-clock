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
      initBreakLength: 5,
      clockTimer: null,
      alarmTimer: null
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.startTheClock = this.startTheClock.bind(this);
    this.timer = this.timer.bind(this);
    this.updateClock = this.updateClock.bind(this);
    this.alarm = this.alarm.bind(this);
    this.pause = this.pause.bind(this);
    this.startTheBreak = this.startTheBreak.bind(this);
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
    const selection = this.state.selection;
    if (selection === "Session") {
      this.setState({ timer: { minutes: mins, seconds: secs } });
    }
    // } else if (selection === "Break") {
    //   this.setState({ break: { minutes: mins, seconds: secs } });
    // }
  }

  startTheClock() {
    this.setState({ hasStarted: true });

    let duration =
      this.state.selection === "Session"
        ? this.state.timer.minutes * 60
        : this.state.break.minutes;
    duration +=
      this.state.selection === "Session"
        ? this.state.timer.seconds
        : this.state.break.seconds;

    console.log(duration);

    const mainTimer = window.setInterval(this.timer, 100);
    this.setState({ clockTimer: mainTimer });

    const alarmTimer = window.setTimeout(this.alarm, duration * 120);
    this.setState({ alarmTimer: alarmTimer });
  }

  timer() {
    const selection = this.state.selection;
    let minutes =
      selection === "Session"
        ? this.state.timer.minutes
        : this.state.break.minutes;
    let seconds =
      selection === "Session"
        ? this.state.timer.seconds
        : this.state.break.seconds;

    if (selection === "Session" && seconds === 0 && minutes >= 1) {
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

  startTheBreak() {
    this.setState({ hasStarted: true });

    let duration =
      this.state.selection === "Session"
        ? this.state.timer.minutes * 60
        : this.state.break.minutes;
    duration +=
      this.state.selection === "Session"
        ? this.state.timer.seconds
        : this.state.break.seconds;

    console.log(duration);

    const mainTimer = window.setInterval(this.timer, 100);
    this.setState({ clockTimer: mainTimer });

    const alarmTimer = window.setTimeout(this.alarm, duration * 100);
    this.setState({ alarmTimer: alarmTimer });
  }

  alarm() {
    this.setState({ selection: "Break" });
    // debugger;
    window.clearInterval(this.state.clockTimer);
    window.clearTimeout(this.state.alarmTimer);
    alert("times up");
  }

  pause() {
    window.clearInterval(this.state.clockTimer);
    window.clearTimeout(this.state.alarmTimer);
    this.setState({ hasStarted: false });
  }

  render() {
    const initSession = this.state.initSessionLength;
    const initBreak = this.state.initBreakLength;
    const hasStarted = this.state.hasStarted;

    // Show the time from active timer
    const display_mins =
      this.state.selection === "Session"
        ? this.state.timer.minutes
        : this.state.break.minutes;
    const display_secs =
      this.state.selection === "Session"
        ? this.state.timer.seconds
        : this.state.break.seconds;

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
              onClick={!hasStarted ? e => this.increment(e) : null}
            >
              <MaterialIcon icon="arrow_upward" />
            </button>
            <button
              id="session-decrement"
              className="btn"
              onClick={!hasStarted ? e => this.decrement(e) : null}
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
              onClick={!hasStarted ? e => this.increment(e) : null}
            >
              <MaterialIcon icon="arrow_upward" />
            </button>
            <button
              id="break-decrement"
              className="btn"
              onClick={!hasStarted ? e => this.decrement(e) : null}
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
            {display_mins > 9 ? display_mins : "0" + display_mins}:
            {display_secs > 9 ? display_secs : "0" + display_secs}
          </p>
        </div>

        {/* Play/pause and reset buttons */}
        <div className="button-area">
          <button
            id="start_stop"
            className="btn"
            onClick={!hasStarted ? () => this.startTheClock(this) : this.pause}
          >
            <MaterialIcon icon="play_arrow" />
            <MaterialIcon icon="pause_circle_outline" />
          </button>
          <button id="reset" className="btn" onClick={this.resetTimer}>
            <MaterialIcon icon="loop" />
          </button>
        </div>
        <audio controls src="" id="beep" />
      </div>
    );
  }
}

export default App;

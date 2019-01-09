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
      selection: "Session",
      hasStarted: false,
      initSessionLength: 25,
      initBreakLength: 5,
      clockTimer: null,
      // alarmTimer: null
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.setTheClock = this.setTheClock.bind(this);
    this.startTheClock = this.startTheClock.bind(this);
    this.timer = this.timer.bind(this);
    this.alarm = this.alarm.bind(this);
    this.pause = this.pause.bind(this);
    this.finish = this.finish.bind(this);
    this.startTheBreak = this.startTheBreak.bind(this);
    this.breakTimer = this.breakTimer.bind(this);
  }

  increment(timer) {
    const timerMinutes = this.state.initSessionLength;
    const breakMinutes = this.state.initBreakLength;

    if (timer.currentTarget.id === "session-increment" && timerMinutes < 60) {
      const initSession = this.state.initSessionLength + 1;

      this.setState({ initSessionLength: initSession });
    } else if (
      timer.currentTarget.id === "break-increment" &&
      breakMinutes < 60
    ) {
      const initBreak = this.state.initBreakLength + 1;

      this.setState({ initBreakLength: initBreak });
    }
  }

  decrement(timer) {
    const timerMinutes = this.state.initSessionLength;
    const breakMinutes = this.state.initBreakLength;

    if (timer.currentTarget.id === "session-decrement" && timerMinutes > 1) {
      const initSession = this.state.initSessionLength - 1;

      this.setState({ initSessionLength: initSession });
    } else if (
      timer.currentTarget.id === "break-decrement" &&
      breakMinutes > 1
    ) {
      const initBreak = this.state.initBreakLength - 1;

      this.setState({ initBreakLength: initBreak });
    }
  }

  resetTimer() {
    const beep = document.getElementById("beep");
    beep.currentTime = 0;
    beep.pause();

    // Reset everything to 25-5 time
    this.setState({ timer: { minutes: 25, seconds: 0 } });
    this.setState({ break: { minutes: 5, seconds: 0 } });
    this.setState({ initSessionLength: 25 });
    this.setState({ initBreakLength: 5 });

    // Clear any alarms or timers that started
    window.clearInterval(this.state.clockTimer);
    window.clearTimeout(this.state.alarmTimer);
    this.setState({ hasStarted: false });

    this.setState({ selection: "Session" });
  }

  setTheClock() {
    const newSession = this.state.initSessionLength;
    const newBreak = this.state.initBreakLength;

    this.setState({ timer: { minutes: newSession, seconds: 0 } });
    this.setState({ break: { minutes: newBreak, seconds: 0 } });
  }

  startTheClock() {
    this.setState({ hasStarted: true });
    this.setState({timer: {minutes: this.state.initSessionLength, seconds: 0}});

    // let duration = this.state.timer.minutes * 60;
    // duration += this.state.timer.seconds;

    const mainTimer = window.setInterval(this.timer, 1000);
    this.setState({ clockTimer: mainTimer });

    // const alarmTimer = window.setTimeout(this.alarm, duration * 1000 + 100);
    // this.setState({ alarmTimer: alarmTimer });
  }

  startTheBreak() {
    this.setState({ hasStarted: true });
    this.setState({break: {minutes: this.state.initBreakLength, seconds: 0}});


    // let duration = this.state.break.minutes * 60;
    // duration += this.state.break.seconds;

    const mainTimer = window.setInterval(this.breakTimer, 1000);
    this.setState({ clockTimer: mainTimer });

    // const alarmTimer = window.setTimeout(this.finish, duration * 1000 + 100);
    // this.setState({ alarmTimer: alarmTimer });
  }

  timer() {
    let minutes = this.state.timer.minutes;
    let seconds = this.state.timer.seconds;

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
  }

  breakTimer() {
    let minutes = this.state.break.minutes;
    let seconds = this.state.break.seconds;

    if (seconds === 0 && minutes >= 1) {
      minutes--;
      seconds = 59;
      this.setState({ break: { minutes: minutes, seconds: seconds } });
    } else if (minutes === 0 && seconds === 0) {
      this.finish();
    } else {
      seconds--;
      this.setState({ break: { minutes: minutes, seconds: seconds } });
    }
  }

  alarm() {
    const beep = document.getElementById("beep");

    this.setState({ selection: "Break" });
    window.clearInterval(this.state.clockTimer);
    // window.clearTimeout(this.state.alarmTimer);
    this.setState({ clockTimer: null });
    // this.setState({ alarmTimer: null });
    beep.play();
    this.startTheBreak();
  }

  pause() {
    window.clearInterval(this.state.clockTimer);
    // window.clearTimeout(this.state.alarmTimer);
    this.setState({ clockTimer: null });
    // this.setState({ alarmTimer: null });

    this.setState({ hasStarted: false });
  }

  finish() {
    const beep = document.getElementById("beep");

    this.setState({ selection: "Session" });
    window.clearInterval(this.state.clockTimer);
    // window.clearTimeout(this.state.alarmTimer);
    this.setState({ clockTimer: null });
    // this.setState({ alarmTimer: null });
    beep.play();
    this.setTheClock();
    this.startTheClock();
  }

  componentDidMount() {
    // Get Unit Test Script from freeCodeCamp.org
    const script = document.createElement("script");

    script.src =
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;

    document.body.appendChild(script);
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
        {/* Audio Element with link to Hosted Sound file */}
        <audio
          src="https://storage.cloud.google.com/my-little-alarm-sounds/Short-ringtone-for-notification.mp3?_ga=2.21506491.-1426996322.1544825551"
          id="beep"
        />
      </div>
    );
  }
}

export default App;

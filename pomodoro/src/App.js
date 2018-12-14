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
      selection: "Session"
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.startTheClock = this.startTheClock.bind(this);
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

  startTheClock() {
    let duration = this.state.timer.minutes * 60;
    duration += this.state.timer.seconds;
    let start = Date.now(),
      diff,
      minutes,
      seconds;

    function timer() {
      // get the number of seconds that have elapsed since
      // startTimer() was called
      diff = duration - (((Date.now() - start) / 1000) | 0);

      // does the same job as parseInt truncates the float
      minutes = (diff / 60) | 0;
      seconds = diff % 60 | 0;
      console.log(this);

      // Logic to add zero in front of single digits
      // minutes = minutes < 10 ? "0" + minutes : minutes;
      // seconds = seconds < 10 ? "0" + seconds : seconds;

      // this.setState({ timer: { minutes: minutes, seconds: seconds } });

      if (diff <= 0) {
        // add one second so that the count down starts at the full duration
        // example 05:00 not 04:59
        start = Date.now() + 1000;
      }
    }
    // we don't want to wait a full second before the timer starts
    timer();
    window.setInterval(timer, 1000);
    window.setTimeout(this.alarm, duration);

    // add event listener for the stop button
    // document
    //   .querySelector("#stopButton")
    //   .addEventListener("click", function(theClock) {
    //     //   stopTheClock(theClock);
    //     window.clearInterval(mainTimer);
    //     window.clearTimeout(alarmTimer);
    //   });
  } // end of timer()

  alarm() {
    alert("times up");
  }

  render() {
    const timerMins = this.state.timer.minutes;
    const timerSecs = this.state.timer.seconds;
    const breakMins = this.state.break.minutes;

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
            <p id="session-length">{timerMins}</p>
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
            <p id="break-length">{breakMins}</p>
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
            {timerMins}:{timerSecs > 9 ? timerSecs : "0" + timerSecs}
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

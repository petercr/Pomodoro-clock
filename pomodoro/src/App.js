import React, { Component } from "react";
import "./App.css";
import "material-design-icons";

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
      const { timer, minutes, id1, id2 } = props;
      let upButtonId, downButtonId;
      if (timer === "Session Length") {
        upButtonId = "session-increment";
        downButtonId = "session-decrement";
      } else {
        upButtonId = "break-increment";
        downButtonId = "break-decrement";
      }
      const buttonStyle = {
        display: "block",
        margin: "5px",
        padding: "10px"
      };

      return (
        <div>
          <p id={id1}>{timer}</p>
          <p id={id2}>{minutes}</p>
          <div style={buttonStyle} />
          <button id={upButtonId} className="btn">
            up
          </button>
          <button id={downButtonId} className="btn">
            down
          </button>
        </div>
      );
    }

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
            {this.state.timer.minutes}:{this.state.timer.seconds}
          </p>
        </div>
        <div className="button-area">
          <button id="start_stop">start/stop</button>
          <button id="reset">reset</button>
        </div>
        <audio controls src="" id="beep" />
      </div>
    );
  }
}

export default App;

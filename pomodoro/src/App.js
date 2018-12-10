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
      const { timer, minutes, seconds, id1, id2 } = props;
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
          <p id={id2}>
            {minutes}:{seconds}
          </p>
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

    const { minutes, seconds } = this.state.timer;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pomodoro Clock</h1>
        </header>
        <div className="top-panels">
          <Timer
            timer="Session Length"
            minutes={minutes}
            seconds={seconds}
            id1="session-label"
            id2="session-length"
          />
          <Timer
            timer="Break Length"
            minutes={this.state.break.minutes}
            seconds={this.state.break.seconds}
            id1="break-label"
            id2="break-length"
          />
        </div>
        <div className="main-timer">
          {/* This will swap between timers */}
          <h2>{this.state.selection}</h2>
          <p>
            {/* This will display the active timer */}
            {this.state.timer.minutes}:{this.state.timer.seconds}
          </p>
        </div>
        <div className="button-area">{/* Lots of control buttons */}</div>
      </div>
    );
  }
}

export default App;

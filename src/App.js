import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: {
        minutes: "25",
        seconds: "00"
      },
      selection: "Session"
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pomodoro Clock</h1>
        </header>
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

function A(props) {
  // you can use object spread because babel-preset-react-app is set up for you
  const { href, children, ...rest } = props;
  return (
    <a
      className="App-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  );
}
export default App;

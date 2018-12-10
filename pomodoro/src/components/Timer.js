import React from "react";
import MaterialIcon from "material-icons-react";

export default function Timer(props) {
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
        <MaterialIcon icon="arrow_upward" />
      </button>
      <button id={downButtonId} className="btn">
        <MaterialIcon icon="arrow_downward" />
      </button>
    </div>
  );
}

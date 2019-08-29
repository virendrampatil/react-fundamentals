import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1>Hello {this.props.name}</h1>
        </div>
      </div>
    );
  }
}

let App = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Chelsea" />, App);

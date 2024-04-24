import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));
import  React from "react";

function Header(props) {
  return <h1>hello from the Header!</h1>;
}

export default Header;

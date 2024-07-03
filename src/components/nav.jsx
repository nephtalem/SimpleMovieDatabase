import React, { Component } from "react";

class Nav extends Component {
  state = {};
  render() {
    const styles = {
      margin: "auto",
      fontSize: "30px",
    };
    return (
      <nav class="navbar navbar-light bg-light">
        <span style={styles} class="navbar-brand mb-0 h1">
          Movie Database
        </span>
      </nav>
    );
  }
}

export default Nav;

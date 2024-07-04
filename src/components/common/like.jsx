import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as fa } from "@fortawesome/free-regular-svg-icons";

class Like extends Component {
  state = {};
  render() {
    return (
      <span
        onClick={() => this.props.onClick(this.props.movie)}
        style={{ cursor: "pointer" }}
      >
        <FontAwesomeIcon icon={this.props.movie.isLike ? faHeart : fa} />
      </span>
    );
  }
}

export default Like;

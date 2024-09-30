import React, { Component } from "react";

export default class Title extends Component {
  render() {
    return (
      <div className="page-header d-flex justify-content-between align-items-center">
        <h1>
          Project 02 - Shopping Cart <small>ReactJS</small>
        </h1>
        <img src="https://devmaster.edu.vn/images/logo.png" alt="Devmaster Academy" />
      </div>
    );
  }
}

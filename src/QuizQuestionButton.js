import React, { Component } from "react";

class QuizQuestionButton extends Component {
  constructor(props) {
    super(props);
    this.state = { button_text: "" };
  }
  render() {
    return (
      <li>
        <button>{this.props.button_text}</button>
      </li>
    );
  }
}

export default QuizQuestionButton;

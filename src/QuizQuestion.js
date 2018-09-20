import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";
class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_question: "",
      showNextQuestionHandler: ""
    };
  }
  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((o, idx) => {
              return (
                <QuizQuestionButton
                  key={idx}
                  button_text={o}
                  clickHandler={this.handleClick.bind(this)}
                />
              );
            })}
          </ul>
        </section>
      </main>
    );
  }

  handleClick = buttonText => {
    if (buttonText === this.props.quiz_question.answer) {
      this.props.showNextQuestionHandler();
    }
  };
}

export default QuizQuestion;

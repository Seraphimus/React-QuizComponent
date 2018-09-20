import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";
class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incorrectAnswer: false
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
        {this.state.incorrectAnswer ? (
          <p className="error">Sorry, that's not right</p>
        ) : (
          <p />
        )}
      </main>
    );
  }

  handleClick = buttonText => {
    let isIncorrect;
    if (buttonText === this.props.quiz_question.answer) {
      this.props.showNextQuestionHandler();
      isIncorrect = false;
    } else {
      isIncorrect = true;
    }

    this.setState(state => {
      return { incorrectAnswer: isIncorrect };
    });
  };
}

export default QuizQuestion;

import React, { Component } from "react";
import "../CSS/newQuestion.css";

class NewQuestion extends Component {
  render() {
    return (
      <div class="question-card">
        <h1 class="title">New Question</h1>
        <form>
          <div class="question-one-section">
            <label for="question-one" class="question-label">
              Question #1
            </label>
            <br />
            <input
              type="text"
              id="question-one"
              name="question-one"
              class="question-one"
            />
          </div>

          <div class="question-two-section">
            <label for="question-two" class="question-label">
              Question #2
            </label>
            <br />
            <input
              type="text"
              id="question-two"
              name="question-two"
              class="question-two"
            />
          </div>

          <div class="question-btn">
            <button>ASK</button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewQuestion;

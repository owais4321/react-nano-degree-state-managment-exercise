import React from 'react';
const Score = (props) => (
          <p className="text">
            Your Score: {props.numCorrect}/{props.numQuestions}
          </p>)

export default Score;
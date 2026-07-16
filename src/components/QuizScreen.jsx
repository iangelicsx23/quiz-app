import { useState } from "react";

function QuizScreen({ questions, onFinishQuiz }) {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const currentQuestion = questions[0];

  if (!currentQuestion) {
    return (
      <section>
        <h2>Quiz</h2>
        <p>No questions were found for this selection.</p>

        <button type="button" onClick={onFinishQuiz}>
          Finish Quiz
        </button>
      </section>
    );
  }

  function handleAnswerClick(answer) {
    if (selectedAnswer) {
      return;
    }

    setSelectedAnswer(answer);
  }

  function getAnswerClass(answer) {
    if (!selectedAnswer) {
      return "answer-button";
    }

    if (answer === currentQuestion.correctAnswer) {
      return "answer-button correct-answer";
    }

    if (answer === selectedAnswer) {
      return "answer-button incorrect-answer";
    }

    return "answer-button";
  }

  const isCorrect =
    selectedAnswer === currentQuestion.correctAnswer;

  return (
    <section className="quiz-screen">
      <p>
        Question 1 of {questions.length}
      </p>

      <h2>{currentQuestion.question}</h2>

      <div className="answer-list">
        {currentQuestion.answers.map((answer) => (
          <button
            key={answer}
            type="button"
            className={getAnswerClass(answer)}
            onClick={() => handleAnswerClick(answer)}
            disabled={Boolean(selectedAnswer)}
          >
            {answer}
          </button>
        ))}
      </div>

      {selectedAnswer && (
        <p className="answer-feedback">
          {isCorrect
            ? "Correct!"
            : `Incorrect. The correct answer is ${currentQuestion.correctAnswer}.`}
        </p>
      )}

      <button type="button" onClick={onFinishQuiz}>
        Finish Quiz
      </button>
    </section>
  );
}

export default QuizScreen;
import { useState } from "react";

function QuizScreen({
  questions,
  score,
  onCorrectAnswer,
  onFinishQuiz,
  onReturnHome,
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
  return (
    <section className="quiz-screen">
      <h2>No Questions Available</h2>

      <p>
        No questions were found for the selected category and difficulty.
      </p>

      <button type="button" onClick={onReturnHome}>
        Return Home
      </button>
    </section>
  );
}

  function handleAnswerClick(answer) {
    if (selectedAnswer) {
      return;
    }

    setSelectedAnswer(answer);

    if (answer === currentQuestion.correctAnswer) {
      onCorrectAnswer();
    }
  }

  function handleNextQuestion() {
    const isLastQuestion =
      currentQuestionIndex === questions.length - 1;

    if (isLastQuestion) {
      onFinishQuiz();
      return;
    }

    setCurrentQuestionIndex(
      (previousIndex) => previousIndex + 1
    );

    setSelectedAnswer("");
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

  const isLastQuestion =
    currentQuestionIndex === questions.length - 1;

  const progressPercentage =
    ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <section className="quiz-screen">
      <div className="quiz-progress">
        <div className="progress-text">
          <span>
            Question {currentQuestionIndex + 1} of{" "}
            {questions.length}
          </span>

          <span>{Math.round(progressPercentage)}%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

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
        <>
          <p className="answer-feedback">
            {isCorrect
              ? "Correct!"
              : `Incorrect. The correct answer is ${currentQuestion.correctAnswer}.`}
          </p>

          <button
            type="button"
            onClick={handleNextQuestion}
          >
            {isLastQuestion
              ? "View Results"
              : "Next Question"}
          </button>
        </>
      )}
    </section>
  );
}

export default QuizScreen;
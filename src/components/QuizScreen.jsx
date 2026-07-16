function QuizScreen({ questions, onFinishQuiz }) {
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
            className="answer-button"
          >
            {answer}
          </button>
        ))}
      </div>

      <button type="button" onClick={onFinishQuiz}>
        Finish Quiz
      </button>
    </section>
  );
}

export default QuizScreen;
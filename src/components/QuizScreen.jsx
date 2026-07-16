function QuizScreen({ questions, onFinishQuiz }) {
  return (
    <section>
      <h2>Quiz</h2>

      <p>
        Matching questions: {questions.length}
      </p>

      <button type="button" onClick={onFinishQuiz}>
        Finish Quiz
      </button>
    </section>
  );
}

export default QuizScreen;
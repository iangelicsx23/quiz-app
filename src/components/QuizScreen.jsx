function QuizScreen({ onFinishQuiz }) {
  return (
    <section>
      <h2>Quiz</h2>
      <p>The current question will appear here.</p>

      <button type="button" onClick={onFinishQuiz}>
        Finish Quiz
      </button>
    </section>
  );
}

export default QuizScreen;
function ResultsScreen({
  score,
  totalQuestions,
  onPlayAgain,
}) {
  return (
    <section className="results-screen">
      <h2>Quiz Complete!</h2>

      <p className="results-score">
        You answered {score} out of {totalQuestions} questions correctly.
      </p>

      <button type="button" onClick={onPlayAgain}>
        Play Again
      </button>
    </section>
  );
}

export default ResultsScreen;
function ResultsScreen({
  score,
  totalQuestions,
  onPlayAgain,
}) {
  const percentage =
    totalQuestions > 0
      ? Math.round((score / totalQuestions) * 100)
      : 0;

  return (
    <section className="results-screen">
      <h2>Quiz Complete!</h2>

      <p className="results-score">
        You answered {score} out of {totalQuestions} questions correctly.
      </p>

      <p className="results-percentage">
        Final score: {percentage}%
      </p>

      <button type="button" onClick={onPlayAgain}>
        Play Again
      </button>
    </section>
  );
}

export default ResultsScreen;
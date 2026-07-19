function ResultsScreen({
  score,
  totalQuestions,
  onPlayAgain,
}) {
  const percentage =
    totalQuestions > 0
      ? Math.round((score / totalQuestions) * 100)
      : 0;

  function getResultMessage() {
    if (percentage >= 80) {
      return "Excellent work!";
    }

    if (percentage >= 60) {
      return "Good job!";
    }

    if (percentage >= 40) {
      return "Nice try. Keep practicing!";
    }

    return "Keep learning and try again!";
  }

  return (
    <section className="results-screen">
      <h2>Quiz Complete!</h2>

      <p className="results-score">
        You answered {score} out of {totalQuestions} questions correctly.
      </p>

      <p className="results-percentage">
        Final score: {percentage}%
      </p>

      <p className="results-message">
        {getResultMessage()}
      </p>

      <button type="button" onClick={onPlayAgain}>
        Play Again
      </button>
    </section>
  );
}

export default ResultsScreen;
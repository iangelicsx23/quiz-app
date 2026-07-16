function ResultsScreen({ onPlayAgain }) {
  return (
    <section>
      <h2>Quiz Results</h2>
      <p>Your final score will appear here.</p>

      <button type="button" onClick={onPlayAgain}>
        Play Again
      </button>
    </section>
  );
}

export default ResultsScreen;
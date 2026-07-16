function HomeScreen({ onStartQuiz }) {
  return (
    <section>
      <h2>Start a New Quiz</h2>
      <p>Select a category and difficulty to begin.</p>

      <button type="button" onClick={onStartQuiz}>
        Start Quiz
      </button>
    </section>
  );
}

export default HomeScreen;
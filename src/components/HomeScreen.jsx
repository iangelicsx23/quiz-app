function HomeScreen({ onStartQuiz }) {
  return (
    <section className="home-screen">
      <h2>Start a New Quiz</h2>

      <p>
        Choose a category and difficulty level, then test your knowledge.
      </p>

      <form
        className="quiz-settings"
        onSubmit={(event) => {
          event.preventDefault();
          onStartQuiz();
        }}
      >
        <div className="form-group">
          <label htmlFor="category">Category</label>

          <select id="category" name="category">
            <option value="">Select a category</option>
            <option value="General Knowledge">
              General Knowledge
            </option>
            <option value="Web Development">
              Web Development
            </option>
            <option value="JavaScript">
              JavaScript
            </option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="difficulty">Difficulty</label>

          <select id="difficulty" name="difficulty">
            <option value="">Select a difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <button type="submit">
          Start Quiz
        </button>
      </form>
    </section>
  );
}

export default HomeScreen;
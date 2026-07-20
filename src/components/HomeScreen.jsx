import { useState } from "react";

function HomeScreen({ onStartQuiz }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

          if (!selectedCategory || !selectedDifficulty) {
            setErrorMessage("Please select both a category and difficulty");
            return;
          }

          setErrorMessage("");
          onStartQuiz(selectedCategory, selectedDifficulty);
        }}
      >
        <div className="form-group">
          <label htmlFor="category">Category</label>

          <select
            id="category"
            name="category"
            value={selectedCategory}
            onChange={(event) => {
              setSelectedCategory(event.target.value);
            }}
            required
          >
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

          <select
            id="difficulty"
            name="difficulty"
            value={selectedDifficulty}
            onChange={(event) => {
              setSelectedDifficulty(event.target.value);
            }}
            required
          >
            <option value="">Select a difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {errorMessage && (
          <p className="error-message" role="alert">
            {errorMessage}
          </p>
        )}

        <button type="submit">
          Start Quiz
        </button>
      </form>
    </section>
  );
}

export default HomeScreen;
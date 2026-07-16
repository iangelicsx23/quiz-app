import { useState } from "react";
import HomeScreen from "./components/HomeScreen";
import QuizScreen from "./components/QuizScreen";
import ResultsScreen from "./components/ResultsScreen";

function App() {
  const [currentScreen, setCurrentScreen] = useState("home");

  function renderScreen() {
    if (currentScreen === "quiz") {
      return (
        <QuizScreen
          onFinishQuiz={() => setCurrentScreen("results")}
        />
      );
    }

    if (currentScreen === "results") {
      return (
        <ResultsScreen
          onPlayAgain={() => setCurrentScreen("home")}
        />
      );
    }

    return (
      <HomeScreen
        onStartQuiz={() => setCurrentScreen("quiz")}
      />
    );
  }

  return (
    <main>
      <h1>Quiz App</h1>
      {renderScreen()}
    </main>
  );
}

export default App;
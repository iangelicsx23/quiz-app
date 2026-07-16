import { useState } from "react";
import HomeScreen from "./components/HomeScreen";
import QuizScreen from "./components/QuizScreen";
import ResultsScreen from "./components/ResultsScreen";
import questions from "./data/questions";

function shuffleArray(items) {
  const shuffledItems = [...items];

  for (
    let currentIndex = shuffledItems.length - 1;
    currentIndex > 0;
    currentIndex--
  ) {
    const randomIndex = Math.floor(
      Math.random() * (currentIndex + 1)
    );

    [shuffledItems[currentIndex], shuffledItems[randomIndex]] = [
      shuffledItems[randomIndex],
      shuffledItems[currentIndex],
    ];
  }

  return shuffledItems;
}

function App() {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [score, setScore] = useState(0);

  function startQuiz(category, difficulty) {
    const filteredQuestions = questions.filter((question) => {
      return (
        question.category === category &&
        question.difficulty === difficulty
      );
    });

    const shuffledQuestions = shuffleArray(filteredQuestions);

    setQuizQuestions(shuffledQuestions);
    setScore(0);
    setCurrentScreen("quiz");
  }

  function renderScreen() {
    if (currentScreen === "quiz") {
      return (
        <QuizScreen
          questions={quizQuestions}
          score={score}
          onCorrectAnswer={() =>
            setScore((previousScore) => previousScore + 1)
          }
          onFinishQuiz={() => setCurrentScreen("results")}
        />
      );
    }

    if (currentScreen === "results") {
      return (
        <ResultsScreen
          score={score}
          totalQuestions={quizQuestions.length}
          onPlayAgain={() => setCurrentScreen("home")}
        />
      );
    }

    return <HomeScreen onStartQuiz={startQuiz} />;
  }

  return (
    <main>
      <h1>Quiz App</h1>
      {renderScreen()}
    </main>
  );
}

export default App;
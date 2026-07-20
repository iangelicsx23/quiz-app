import { useEffect, useState } from "react";
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

  const [bestScore, setBestScore] = useState(() => {
    const savedBestScore = localStorage.getItem("quizBestScore");

    return savedBestScore ? Number(savedBestScore) : 0;
  });

  useEffect(() => {
    localStorage.setItem("quizBestScore", bestScore);
  }, [bestScore]);

  function startQuiz(category, difficulty) {
    const filteredQuestions = questions.filter((question) => {
      return (
        question.category === category &&
        question.difficulty === difficulty
      );
    });

    if (filteredQuestions.length === 0) {
      setQuizQuestions([]);
      setCurrentScreen("quiz");
      return;
    }

    const shuffledQuestions = shuffleArray(filteredQuestions);

    setQuizQuestions(shuffledQuestions);
    setScore(0);
    setCurrentScreen("quiz");
  }

  function finishQuiz() {
    if (score > bestScore) {
      setBestScore(score);
    }

    setCurrentScreen("results");
  }

  function playAgain() {
    setQuizQuestions([]);
    setScore(0);
    setCurrentScreen("home");
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
          onFinishQuiz={finishQuiz}
          onReturnHome={playAgain}
        />
      );
    }

    if (currentScreen === "results") {
      return (
        <ResultsScreen
          score={score}
          totalQuestions={quizQuestions.length}
          bestScore={bestScore}
          onPlayAgain={playAgain}
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
import { useState } from "react";

const questions = [
  "I feel that life is meaningful.",
  "I feel optimistic about my future.",
  "I feel energetic most days.",
  "I feel socially connected.",
  "I enjoy daily activities.",
  "I feel confident in my abilities.",
  "I manage stress effectively.",
  "I feel emotionally balanced.",
  "I sleep well regularly.",
  "I maintain healthy relationships.",
  "I feel grateful frequently.",
  "I feel motivated to achieve goals.",
  "I experience positive emotions daily.",
  "I feel mentally focused.",
  "I feel satisfied with my personal growth."
];

export default function Survey() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(null);

  const selectAnswer = (val) => {
    const updated = [...answers];
    updated[current] = val;
    setAnswers(updated);
  };

  const next = () => {
    if (answers[current] == null) return;
    if (current < questions.length - 1) setCurrent(current + 1);
    else calculateScore();
  };

  const calculateScore = () => {
    const sum = answers.reduce((a, b) => a + b, 0);
    const avg = (sum / questions.length).toFixed(2);

    setScore(avg);
    setFinished(true);

    const history = JSON.parse(localStorage.getItem("moodHistory")) || [];
    history.push({ date: new Date().toLocaleDateString(), score: avg });
    localStorage.setItem("moodHistory", JSON.stringify(history));
  };

  if (finished) {
    return (
      <div className="card block-lavender">
        <h1>Your Happiness Score</h1>
        <h2 style={{ fontSize: "36px" }}>{score}</h2>
        <p>1 = Very Low • 6 = Very High</p>
      </div>
    );
  }

  return (
    <div className="card block-sky">
      <h1>Wellbeing Self-Assessment</h1>
      <p>Rate each statement from 1 (Strongly Disagree) to 6 (Strongly Agree)</p>

      <h3 style={{ marginTop: "20px" }}>
        Question {current + 1} of {questions.length}
      </h3>

      <p style={{ fontSize: "18px", fontWeight: "500" }}>
        {questions[current]}
      </p>

      <div className="scale-row">
        {[1,2,3,4,5,6].map(n => (
          <div
            key={n}
            className={`scale-btn ${answers[current] === n ? "active" : ""}`}
            onClick={() => selectAnswer(n)}
          >
            {n}
          </div>
        ))}
      </div>

      <button onClick={next}>
        {current === questions.length - 1 ? "Finish Survey" : "Next"}
      </button>
    </div>
  );
}
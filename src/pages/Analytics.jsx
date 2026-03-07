import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export default function Analytics() {

  const history = JSON.parse(localStorage.getItem("moodHistory")) || [];
  const scores = history.map(h => Number(h.score));

  const average =
    scores.length > 0
      ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2)
      : 0;

  const data = {
    labels: history.map((h, i) => h.date || `Entry ${i+1}`),
    datasets: [
      {
        label: "Score Trend",
        data: scores,
        borderColor: "#15803D",
        tension: 0.4
      }
    ]
  };

  const high = scores.filter(s => s >= 4.5).length;
  const mid = scores.filter(s => s >= 3 && s < 4.5).length;
  const low = scores.filter(s => s < 3).length;

  return (
    <>
      <div className="card block-peach">
        <h1>Detailed Analytics</h1>
        <p>
          Analytics provide deeper insight into emotional patterns and long-term trends.
        </p>
      </div>

      <div className="card block-blue">
        <h2>Trend Visualization</h2>
        <div className="chart-container">
          {history.length === 0 ? <p>No data yet</p> : <Line data={data} />}
        </div>
      </div>

      <div className="card block-mint">
        <h2>Score Distribution</h2>
        <p>High Wellbeing Entries: {high}</p>
        <p>Moderate Wellbeing Entries: {mid}</p>
        <p>Low Wellbeing Entries: {low}</p>
      </div>

      <div className="card block-lemon">
        <h2>Interpretation</h2>
        <p>
          {average < 3
            ? "Your analytics indicate low wellbeing patterns. Consider structured lifestyle adjustments."
            : average < 4.5
            ? "Your wellbeing is stable but has room for improvement."
            : "You maintain a consistently high emotional wellbeing level."}
        </p>
      </div>
    </>
  );
}
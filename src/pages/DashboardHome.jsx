import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export default function DashboardHome() {

  const history = JSON.parse(localStorage.getItem("moodHistory")) || [];

  const latest = history.length
    ? Number(history[history.length - 1].score)
    : 0;

  const average =
    history.length > 0
      ? (
          history.reduce((a, b) => a + Number(b.score), 0) /
          history.length
        ).toFixed(2)
      : 0;

  const data = {
    labels: history.map((h, i) => h.date || `Entry ${i+1}`),
    datasets: [
      {
        label: "Happiness Trend",
        data: history.map((h) => Number(h.score)),
        borderColor: "#15803D",
        tension: 0.4
      }
    ]
  };

  return (
    <>
      <div className="card block-mint">
        <h1>Wellbeing Dashboard</h1>
        <p>
          This dashboard provides a holistic overview of your emotional
          and psychological wellbeing based on your survey responses.
        </p>
      </div>

      <div style={{ display: "flex", gap: "25px", marginBottom: "30px" }}>
        <div className="card block-lavender">
          <h2>Latest Score</h2>
          <h1>{latest}</h1>
          <p>Your most recent reflection result.</p>
        </div>

        <div className="card block-sky">
          <h2>Average Score</h2>
          <h1>{average}</h1>
          <p>Overall emotional trend average.</p>
        </div>

        <div className="card block-peach">
          <h2>Total Entries</h2>
          <h1>{history.length}</h1>
          <p>Total number of self-reflections recorded.</p>
        </div>
      </div>

      <div className="card block-blue">
        <h2>Trend Analysis</h2>
        <div className="chart-container">
          {history.length === 0 ? <p>No data yet</p> : <Line data={data} />}
        </div>
      </div>

      <div className="card block-lemon">
        <h2>Insight Summary</h2>
        <p>
          {average < 3
            ? "Your current wellbeing level suggests focusing on self-care, connection, and rest."
            : average < 4.5
            ? "Your wellbeing is moderate. Consider strengthening positive habits."
            : "You are experiencing high wellbeing. Maintain your current lifestyle balance."}
        </p>
      </div>
    </>
  );
}
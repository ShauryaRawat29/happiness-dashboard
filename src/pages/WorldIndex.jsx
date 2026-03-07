export default function WorldIndex() {

  return (
    <>
      <div className="card block-rose">
        <h1>World Happiness Report</h1>
        <p>
          The World Happiness Report measures global happiness based on:
          GDP per capita, social support, life expectancy, freedom,
          generosity and corruption perception.
        </p>

        <a
          href="https://worldhappiness.report/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#15803D", fontWeight: "600" }}
        >
          Visit Official World Happiness Report Website →
        </a>
      </div>

      <div className="card block-mint">
        <h2>Top Ranked Countries</h2>
        <p>1. Finland — Score 7.76</p>
        <p>2. Denmark — Score 7.52</p>
        <p>3. Iceland — Score 7.51</p>
        <p>4. Sweden — Score 7.34</p>
        <p>5. Netherlands — Score 7.30</p>
      </div>

      <div className="card block-blue">
        <h2>Global Comparison</h2>
        <p>
          Global average happiness ≈ 5.5.  
          Compare your personal score to understand your wellbeing standing.
        </p>
      </div>
    </>
  );
}
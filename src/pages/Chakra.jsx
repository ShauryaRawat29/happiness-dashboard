export default function Chakra() {

  const chakras = [
    {
      name: "Root Chakra",
      color: "block-rose",
      theory: "Grounding, stability, security.",
      link: "https://www.youtube.com/watch?v=ersZEW9ucA4"
    },
    {
      name: "Sacral Chakra",
      color: "block-peach",
      theory: "Creativity, emotions, pleasure.",
      link: "https://www.youtube.com/watch?v=6juYDQvORDw"
    },
    {
      name: "Solar Plexus Chakra",
      color: "block-lemon",
      theory: "Confidence, willpower, identity.",
      link: "https://www.youtube.com/watch?v=276sKohQebE"
    },
    {
      name: "Heart Chakra",
      color: "block-mint",
      theory: "Love, compassion, connection.",
      link: "https://www.youtube.com/watch?v=i5jcY49K2Ag"
    },
    {
      name: "Throat Chakra",
      color: "block-sky",
      theory: "Communication, truth.",
      link: "https://www.youtube.com/watch?v=RPCr5uZWRd0"
    },
    {
      name: "Third Eye Chakra",
      color: "block-lavender",
      theory: "Intuition, awareness.",
      link: "https://www.youtube.com/watch?v=EVsuqUKrx-I"
    }
  ];

  return (
    <>
      <h1>Chakra Knowledge Base</h1>

      {chakras.map((c, i) => (
        <div key={i} className={`card ${c.color}`}>
          <h2>{c.name}</h2>
          <p>{c.theory}</p>

          <a
            href={c.link}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#15803D", fontWeight: "600" }}
          >
            Explore Meditation Videos →
          </a>
        </div>
      ))}
    </>
  );
}
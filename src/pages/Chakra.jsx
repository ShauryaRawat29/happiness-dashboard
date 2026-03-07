export default function Chakra() {

  const chakras = [
    {
      name: "Root Chakra",
      color: "block-rose",
      theory: "Grounding, stability, security.",
      link: "https://www.youtube.com/results?search_query=root+chakra+meditation"
    },
    {
      name: "Sacral Chakra",
      color: "block-peach",
      theory: "Creativity, emotions, pleasure.",
      link: "https://www.youtube.com/results?search_query=sacral+chakra+meditation"
    },
    {
      name: "Solar Plexus Chakra",
      color: "block-lemon",
      theory: "Confidence, willpower, identity.",
      link: "https://www.youtube.com/results?search_query=solar+plexus+chakra+meditation"
    },
    {
      name: "Heart Chakra",
      color: "block-mint",
      theory: "Love, compassion, connection.",
      link: "https://www.youtube.com/results?search_query=heart+chakra+meditation"
    },
    {
      name: "Throat Chakra",
      color: "block-sky",
      theory: "Communication, truth.",
      link: "https://www.youtube.com/results?search_query=throat+chakra+meditation"
    },
    {
      name: "Third Eye Chakra",
      color: "block-lavender",
      theory: "Intuition, awareness.",
      link: "https://www.youtube.com/results?search_query=third+eye+chakra+meditation"
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
export default function Sidebar({ activePage, setActivePage }) {
  const pages = [
    { id: "dashboard", label: "Dashboard" },
    { id: "survey", label: "Survey" },
    { id: "analytics", label: "Analytics" },
    { id: "world", label: "World Index" },
    { id: "chakra", label: "Chakra" },
    { id: "assistant", label: "Assistant" }
  ];

  return (
    <>
      <h2>Multi-Happiness and Well being Survey Dashboard Chatbot</h2>

      {pages.map(page => (
        <div
          key={page.id}
          className={`sidebar-item ${activePage === page.id ? "active" : ""}`}
          onClick={() => setActivePage(page.id)}
        >
          {page.label}
        </div>
      ))}
    </>
  );
}
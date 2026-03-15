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
      <div style={{textAlign:"center", marginBottom:"30px"}}>
        <img
          src="/logo.png"
          alt="Moodscope"
          style={{width:"120px"}}
        />
      </div>

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
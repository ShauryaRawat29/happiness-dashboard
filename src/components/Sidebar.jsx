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
      {/* LOGO SECTION */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
        marginBottom: "30px"
      }}>
        <img
          src="/logo.png"
          alt="Main Logo"
          style={{
            width: "140px",
            height: "auto",
            borderRadius: "10px"
          }}
        />

        <img
          src="/logo2.png"
          alt="Second Logo"
          style={{
            width: "90px",
            height: "auto",
            borderRadius: "10px"
          }}
        />
      </div>

      {/* MENU */}
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
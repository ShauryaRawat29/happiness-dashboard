import { useState } from "react";
import Sidebar from "./components/Sidebar";

import DashboardHome from "./pages/DashboardHome";
import Survey from "./pages/Survey";
import Analytics from "./pages/Analytics";
import Chakra from "./pages/Chakra";
import Assistant from "./pages/Assistant";
import WorldIndex from "./pages/WorldIndex";

export default function Dashboard() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "survey": return <Survey />;
      case "analytics": return <Analytics />;
      case "chakra": return <Chakra />;
      case "assistant": return <Assistant />;
      case "world": return <WorldIndex />;
      default: return <DashboardHome />;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
      </div>
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
}
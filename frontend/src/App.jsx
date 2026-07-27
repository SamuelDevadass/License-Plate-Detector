import { useState } from "react";
import StepBar from "./components/StepBar.jsx";
import SelectWingPage from "./pages/SelectWingPage.jsx";
import EmptySpotsPage from "./pages/EmptySpotsPage.jsx";
import DetectionPage from "./pages/DetectionPage.jsx";
import OwnerDetailsPage from "./pages/OwnerDetailsPage.jsx";
import EntryExitPage from "./pages/EntryExitPage.jsx";
import BillingPage from "./pages/BillingPage.jsx";

export default function App() 
{
  const [page, setPage] = useState("wing");

  const [data, setData] = useState
  ({
    licensePlate: "",
    wing: "",
    centre_id: null,
    floor: null,
    spotNumber: null,
    size: "",
    ownerId: "",
    folderPath: "",
  });

  function updateData(patch) 
  {
    setData((prev) => ({ ...prev, ...patch }));
  }

  function goTo(nextPage) 
  {
    setPage(nextPage);
  }

  const pageProps = { data, updateData, goTo };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">
          Parking Management System<span> - License Plate Detection</span>
        </div>
        <div className="subtitle">Parking Console</div>
      </header>
      <StepBar current={page} />
        {page === "wing" && <SelectWingPage {...pageProps} />}
        {page === "spots" && <EmptySpotsPage {...pageProps} />}
        {page === "detect" && <DetectionPage {...pageProps} />}
        {page === "owner" && <OwnerDetailsPage {...pageProps} />}
        {page === "entry-exit" && <EntryExitPage {...pageProps} />}
        {page === "billing" && <BillingPage {...pageProps} />}
    </div>
  );
}

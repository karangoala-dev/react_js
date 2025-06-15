import "../styles.css";
import json from "../data.json";
import { useEffect, useState } from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";

export default function App() {
  const [data, setData] = useState(json);

  const componentMap = {
    Profile: Profile,
    Interests: Interests,
    Settings: Settings,
  };
  const tabs = Object.keys(componentMap);
  const [activeTab, setActiveTab] = useState(0);
  const ActiveComponent = componentMap[tabs[activeTab]];
  const handleTabClick = (ind) => {
    setActiveTab(ind);
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="App">
      <div className="tab-headers-container">
        {Object.keys(data).map((i, ind) => (
          <div
            className={`tab-header ${activeTab == ind ? "activeTab" : ""}`}
            key={ind}
            onClick={() => setActiveTab(ind)}
          >
            {i}
          </div>
        ))}
      </div>
      <div className="body">
        {<ActiveComponent data={data} setData={setData} />}
      </div>
    </div>
  );
}

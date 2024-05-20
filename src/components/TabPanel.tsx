import React, { useState } from "react";
import { Tab } from "./Tab";

interface TabPanel {
  title?: string;
  tabs: string[];
  children: React.ReactNode;
  content?: React.ReactNode;
}

export const TabPanel = ({ title, tabs, children }: TabPanel) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      {title && <h1>{title}</h1>} {}
      <div role="tablist" aria-label="Tabs">
        {tabs.map((tab, index) => (
          <Tab
            key={`tab-${index}`}
            isSelected={selectedTab === index}
            onClick={() => setSelectedTab(index)}
            children={tab}
          />
        ))}
      </div>
      <div role="tabpanel" id={`tabpanel-${tabs[selectedTab]}`}>
        {React.Children.toArray(children)[selectedTab]}
      </div>
    </div>
  );
};

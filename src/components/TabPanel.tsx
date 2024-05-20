import React, { useState } from "react";
import { Tab } from "./Tab";

interface TabPanel {
  title: string;
  tabs: string[];
  children: React.ReactNode[];
  content?: React.ReactNode;
}

const TabPanel = ({
  tabs,
  children,
}: {
  tabs: TabPanel[];
  children: TabPanel[];
}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <div role="tablist" aria-label="Tabs">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            isSelected={selectedTab === index}
            onClick={() => setSelectedTab(index)}
            children={tab.title}
          />
        ))}
      </div>
      <div role="tabpanel">
        {children[selectedTab].content} {}
      </div>
    </div>
  );
};

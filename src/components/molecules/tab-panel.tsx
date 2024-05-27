import React from 'react';
import TabPanelProps from './interfaces/tab-panel.interface';

const TabPanel = ({name,index,tabId,children,activeIndex}:TabPanelProps) => {
    return <div
    role={TabPanel}
    id={name}
    tabindex={index}
    aria-labelledby={tabId}
    hidden={index===activeIndex}
    >
        {children}
    </div>
};

export default TabPanel;
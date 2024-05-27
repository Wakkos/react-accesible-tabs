import React from 'react';
import TabPanelProps from './interfaces/tab-panel.interface';
import TabListProps from './interfaces/tab-list.interface';

const createTab = (tabPanel:React.ReactNode<TabPanelProps>) => {
    const {index,activeIndex,name,tabId}=tabPanel.props;
    return <button
        role="tab"
        aria-selected={index===activeIndex}
        aria-controls={name}
        id={tabId}
        tabindex={index}
    />
};

const TabList = ({children,ariaLabel}:TabListProps) => {
    return <div>
        <div
            role='tablist'
            aria-label={ariaLabel}
        >
            {children.map(createTab)}
        </div>
        {children}
    </div>
};

export default TabList;
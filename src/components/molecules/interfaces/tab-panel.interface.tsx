import {ReactNode} from 'react';

interface TabPanelProps {

    name: string;
    index: number;
    tabId: string;
    children: ReactNode;
    activeIndex: number;
};

export default TabPanelProps;
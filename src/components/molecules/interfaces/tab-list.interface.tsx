import {ReactNode} from 'react';
import TabPanelProps from './tab-panel.interface';

interface TabListProps {
    children: ReactNode<TabPanelProps>;
    ariaLabel: string;
};

export default TabListProps;
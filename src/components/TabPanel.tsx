import React, { useEffect, useState } from 'react';
import { Tab } from './Tab';

interface TabPanel {
	title?: string;
	tabs: string[];
	children: React.ReactNode;
	content?: React.ReactNode;
}

export const TabPanel = ({ title, tabs, children }: TabPanel) => {
	const [selectedTab, setSelectedTab] = useState(0);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'ArrowRight') {
				setSelectedTab(
					(prevSelectedTab) => (prevSelectedTab + 1) % tabs.length
				);
			} else if (event.key === 'ArrowLeft') {
				setSelectedTab(
					(prevSelectedTab) => (prevSelectedTab - 1 + tabs.length) % tabs.length
				);
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [tabs.length]);

	return (
		<div>
			{title && <h1>{title}</h1>} {}
			<div role='tablist' aria-label='Tabs'>
				{tabs.map((tab, index) => (
					<Tab
						key={`tab-${index}`}
						isSelected={selectedTab === index}
						onClick={() => setSelectedTab(index)}
						children={tab}
					/>
				))}
			</div>
			<div role='tabpanel' id={`tabpanel-${tabs[selectedTab]}`}>
				{React.Children.toArray(children)[selectedTab]}
			</div>
		</div>
	);
};

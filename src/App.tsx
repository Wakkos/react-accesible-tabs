import React from 'react';
import './App.css';
import { TabPanel } from './components/TabPanel';

const App = () => {
	const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

	return (
		<TabPanel title='Tab Panel' tabs={tabs}>
			<div>
				<h2>Content of Tab 1</h2>
				<p>This is some complex content for Tab 1.</p>
			</div>
			<div>
				<h2>Content of Tab 2</h2>
				<p>This is some complex content for Tab 2.</p>
				<ul>
					<li>Item 1</li>
					<li>Item 2</li>
					<li>Item 3</li>
				</ul>
			</div>
			<div>
				<h2>Content of Tab 3</h2>
				<p>This is some complex content for Tab 3.</p>
				<form>
					<label htmlFor='name'>Name:</label>
					<input type='text' id='name' />
					<button type='submit'>Submit</button>
				</form>
			</div>
		</TabPanel>
	);
};

export default App;

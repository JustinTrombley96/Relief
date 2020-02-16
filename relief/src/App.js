import React from 'react';
import './App.css';
import { Relief } from './components/Relief';
import { Friend } from './components/Friend';
import { Goals } from './components/Goals';
import { Future } from './components/Future';

export const App = () => {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Relief</h1>
				<Relief />
				<Friend />
				<Goals />
				<Future />
			</header>
		</div>
	);
};

import React from 'react';
import './App.css';

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

export const Relief = () => {
	return (
		<div>
			Let your emotions out: <input type='text' placeholder='Let your emotions out' />
			<button>Release</button>
		</div>
	);
};

export const Friend = () => {
	return (
		<div>
			<button>Hear from a Friend</button>
			<p />
		</div>
	);
};

export const Goals = () => {
	return (
		<div>
			Set your goals: <input type='text' placeholder='Set your goals' />
			<button>Set</button>
		</div>
	);
};

export const Future = () => {
	return (
		<div>
			<button>See your Future</button>
			<p />
		</div>
	);
};

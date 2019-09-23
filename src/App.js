import React, { useState, useEffect } from 'react';
import Toggle from './Toggle';
import './App.css';

const App = () => {
  // formula
  // const [value, setValue] = useState(initialState);

	const [name, setName] = useState('');

	// runs after a mount/render and after an update
	useEffect(() => {
		document.title = name;
	});

	return (
		<div className="App">
			<h1>We are the app</h1>
			<input type="text" onChange={(e) => setName(e.target.value)} value={name} />
			<Toggle />

			<form onSubmit={(e) => {
				e.preventDefault();
				// formSubmit(name, setName);
			}}>
				<input type="text" onChange={(e) => setName(e.target.value)} value={name} >
				</input>
				<button>Submit</button>
			</form>
		</div>
	);
};

// const formSubmit = (value, setValue) => {
// 	console.log('email sent' + value);
// 	setValue(' ');
// };
export default App;

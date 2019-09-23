import { useState, useEffect } from 'react';

function useTitleInput(initialValue) {
	const [value, setValue] = useState('');

		// runs after a mount/render and after an update
		useEffect(() => {
			document.title = value;
		});
		return [value, setValue];
}
export { useTitleInput };
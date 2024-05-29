import React from 'react';
import { Routes, Route } from 'react-router-dom';

// components
import IndexView from './views/indexView';
import AccueilView from './views/accueilView';

const App: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<IndexView />}>
				<Route index element={<AccueilView />} />
			</Route>
		</Routes>
	);
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './router/layout';
import HomePage from './pages/homePage';
import MenuPage from './pages/menuPage';
import GalleryPage from './pages/galleryPage';
import ListMenu from './components/menus/listMenu';
import NotFoundPage from './pages/notFoundPage';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='menu' element={<MenuPage />}>
						<Route index element={<div>Welcome to the Menu Page</div>} />
						<Route path='starters' element={<ListMenu endpoint='starters' />} />
						<Route path='mains' element={<ListMenu endpoint='mains' />} />
						<Route path='desserts' element={<ListMenu endpoint='desserts' />} />
						<Route path='drinks' element={<ListMenu endpoint='drinks' />} />
						<Route path='*' element={<NotFoundPage />} />
					</Route>
					<Route path='gallery' element={<GalleryPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;

import React from 'react';
import { Outlet } from 'react-router-dom';

// components
import Header from '../components/anchors/header';
import Footer from '../components/anchors/footer';

// styles
import { Box } from '@mui/material';

const IndexView: React.FC = () => {
	return (
		<div>
			<Header />
			<Box>
				<Outlet />
			</Box>
			<Footer />
		</div>
	);
};

export default IndexView;

import React from 'react';
import Header from '../components/navigation/header';
import Footer from '../components/navigation/footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<React.Fragment>
			<Header />
			<Outlet />
			<Footer />
		</React.Fragment>
	);
};

export default Layout;

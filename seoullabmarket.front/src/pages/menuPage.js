import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderMenu from '../components/navigation/headerMenu';
import Container from '../styles/container.styles';

const MenuPage = () => {
	return (
		<Container.Section>
			<Container.Article flexDirection={'column'}>
				<HeaderMenu />
				<Outlet />
			</Container.Article>
		</Container.Section>
	);
};

export default MenuPage;

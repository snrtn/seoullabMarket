import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderMenu from '../components/navigation/headerMenu';
import Container from '../styles/container.styles';
import Content from '../styles/content.styles';

const MenuPage = () => {
	return (
		<Container.Section>
			<Container.Wrapper>
				<Container.Article flexDirection={'column'}>
					<Content.Box height={'10rem'} />
					<HeaderMenu />
					<Content.Box height={'5rem'} />
					<Outlet />
					<Content.Box height={'10rem'} />
				</Container.Article>
			</Container.Wrapper>
		</Container.Section>
	);
};

export default MenuPage;

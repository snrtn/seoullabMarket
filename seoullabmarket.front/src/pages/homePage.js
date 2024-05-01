import React from 'react';
import Container from '../styles/container.styles';
import Outline from '../components/home/outline';
import Izakaya from '../components/home/izakaya';
import Overlay from '../components/home/overlay';
import Layout from '../components/home/layout';
import Map from '../components/home/map';
import Content from '../styles/content.styles';
import colors from '../styles/color.styles';

const HomePage = () => {
	return (
		<Container.Section flexDirection={'column'}>
			<Container.Wrapper>
				<Container.Article maxHeight={'90rem'} height={'90rem'} lgHeight={'65rem'} smHeight={'70rem'}>
					<Content.Image src={'/assets/jumbotron.jpg'} />
					<Outline />
				</Container.Article>
			</Container.Wrapper>
			<Container.Wrapper backgroundColor={colors.black}>
				<Container.Article maxHeight={'80rem'} height={'80rem'} lgHeight={'65rem'} smHeight={'40rem'}>
					<Izakaya />
				</Container.Article>
			</Container.Wrapper>
			<Container.Wrapper backgroundColor={colors.black}>
				<Container.Article maxHeight={'80rem'} height={'80rem'} lgHeight={'60rem'} smHeight={'100rem'}>
					<Overlay />
				</Container.Article>
			</Container.Wrapper>
			<Layout />
			<Container.Wrapper backgroundColor={colors.black}>
				<Container.Article
					maxHeight={'100rem'}
					height={'70rem'}
					lgHeight={'60rem'}
					smHeight={'60rem'}
					xlPadding={'0 3rem'}
				>
					<Map />
				</Container.Article>
			</Container.Wrapper>
		</Container.Section>
	);
};

export default HomePage;

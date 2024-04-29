import React from 'react';
import Container from './styles/container.styles';
import Typography from './styles/typography.styles';
import colors from './styles/color.styles';
import Content from './styles/content.styles';

const App = () => {
	return (
		<Container.Section>
			<Container.Wrapper backgroundColor={colors.green} height={'90rem'}>
				<Container.Article
					Glassmorphism={true}
					maxWidth={'120rem'}
					height={'72rem'}
					lgMaxWidth={'60rem'}
					smMaxWidth={'36rem'}
				>
					<Content.Image
						Glassmorphism={true}
						src={
							'https://images.pexels.com/photos/20923044/pexels-photo-20923044/free-photo-of-la-tierra.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						}
					/>
					<Content.Box Glassmorphism={true} />
					<Typography.A color={colors.white} highlight={true} highlightColor={colors.orange}>
						Typography
					</Typography.A>
				</Container.Article>
			</Container.Wrapper>
		</Container.Section>
	);
};

export default App;

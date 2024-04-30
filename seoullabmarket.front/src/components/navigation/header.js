import React from 'react';
import Content from '../../styles/content.styles';
import Container from '../../styles/container.styles';
import Typography from '../../styles/typography.styles';
import colors from '../../styles/color.styles';

const Header = () => {
	return (
		<Container.Wrapper height={'6.4rem'} position={'fixed'} style={{ zIndex: '9999' }}>
			<Container.Article height={'6.4rem'} Glassmorphism={true}>
				<Content.Box maxWidth={'120rem'}>
					<Content.Box justifyContent={'space-between'} maxWidth={'60rem'}>
						<Typography.A color={colors.white} to='/'>
							Accueil
						</Typography.A>
						<Typography.A color={colors.white} to='/menu'>
							Menu
						</Typography.A>
						<Typography.A color={colors.white} to='/gallery'>
							Galerie
						</Typography.A>
					</Content.Box>
				</Content.Box>
			</Container.Article>
		</Container.Wrapper>
	);
};

export default Header;

import React from 'react';
import Container from '../../styles/container.styles';
import Content from '../../styles/content.styles';
import Typography from '../../styles/typography.styles';
import colors from '../../styles/color.styles';
import { SnsSection, StyledLink } from './footer.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<Container.Wrapper height={'30rem'} flexDirection={'column'} backgroundColor={colors.black}>
			<Container.Article flexDirection={'column'} maxHeight={'6rem'} lgMaxHeight={'2rem'} smMaxHeight={'2rem'}>
				<Typography.H1 fontWeight={'bold'} color={colors.white}>
					Seoul Lab
				</Typography.H1>
				<Typography.P color={colors.orange}>Cuisine coréenne moderne</Typography.P>
			</Container.Article>
			<Container.Article maxHeight={'6rem'} lgMaxHeight={'10rem'} smMaxHeight={'8rem'}>
				<Content.Box maxWidth={'120rem'}>
					<Content.Box justifyContent={'space-between'} maxWidth={'40rem'}>
						<Typography.A highlight={true} highlightColor={colors.orange} color={colors.white} to='/menu/starters'>
							Entrées
						</Typography.A>
						<Typography.A highlight={true} highlightColor={colors.orange} color={colors.white} to='/menu/mains'>
							Plats
						</Typography.A>
						<Typography.A highlight={true} highlightColor={colors.orange} color={colors.white} to='/menu/desserts'>
							Desserts
						</Typography.A>
						<Typography.A highlight={true} highlightColor={colors.orange} color={colors.white} to='/menu/drinks'>
							Boissons
						</Typography.A>
					</Content.Box>
				</Content.Box>
			</Container.Article>
			<Container.Article maxHeight={'10rem'} lgMaxHeight={'9rem'} smMaxHeight={'8rem'}>
				<SnsSection>
					<StyledLink target='_blank' to='https://www.instagram.com/restaurant.seoul.lab/' bgColor='#e4405f'>
						<FontAwesomeIcon className='fa' icon={faInstagram} />
					</StyledLink>
					<StyledLink target='_blank' to='https://www.linkedin.com/in/hanjun-kim-1b1741171/' bgColor='#0077B5'>
						<FontAwesomeIcon className='fa' icon={faLinkedin} />
					</StyledLink>
				</SnsSection>
			</Container.Article>
		</Container.Wrapper>
	);
};

export default Footer;

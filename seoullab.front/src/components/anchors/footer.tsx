import { Box, Container, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { SnsSection, StyledLink, CustomLink } from './footer.styles';

const Footer = () => {
	return (
		<Box
			sx={{
				backgroundColor: '#000',
				color: '#fff',
				padding: '2rem 0',
				textAlign: 'center',
				height: '70vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Container sx={{ marginBottom: '1rem' }}>
				<Typography variant='h1' component='h1' fontWeight='bold'>
					Seoul Lab
				</Typography>
				<Typography variant='body1' color='orange'>
					Cuisine coréenne moderne
				</Typography>
			</Container>
			<Container sx={{ marginBottom: '3rem' }}>
				<Box display='flex' justifyContent='center' gap='2rem'>
					<CustomLink to='#' color='inherit' highlight={true} highlightColor={'orange'}>
						Entrées
					</CustomLink>
					<CustomLink to='#' color='inherit' highlight={true} highlightColor={'orange'}>
						Plats
					</CustomLink>
					<CustomLink to='#' color='inherit' highlight={true} highlightColor={'orange'}>
						Desserts
					</CustomLink>
					<CustomLink to='#' color='inherit' highlight={true} highlightColor={'orange'}>
						Boissons
					</CustomLink>
				</Box>
			</Container>
			<SnsSection>
				<StyledLink target='_blank' to='https://www.instagram.com/restaurant.seoul.lab/' bgColor='#e4405f'>
					<FontAwesomeIcon className='fa' icon={faInstagram} />
				</StyledLink>
				<StyledLink target='_blank' to='https://www.linkedin.com/in/hanjun-kim-1b1741171/' bgColor='#0077B5'>
					<FontAwesomeIcon className='fa' icon={faLinkedin} />
				</StyledLink>
			</SnsSection>
			<Container sx={{ marginTop: '3rem' }}>
				<Typography variant='body1' fontWeight='bold'>
					Voulez-vous créer gratuitement votre propre site web et portfolio ?
				</Typography>
				<Typography variant='body2' color='gray'>
					Si vous êtes intéressé, vous pouvez me contacter par message privé sur LinkedIn pour une consultation.
				</Typography>
				<Typography variant='body2' color='gray'>
					Aucuns frais de production ne sont demandés.
				</Typography>
			</Container>
		</Box>
	);
};

export default Footer;

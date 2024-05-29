import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const items = [
	{
		imagePath: '/assets/layout/4O3A9292.jpg',
		title: 'Seoul Lab',
		description: 'Cuisine coréenne moderne.',
	},
	{
		imagePath: '/assets/layout/4O3A9312.jpg',
		title: 'Équipe',
		description: 'Rencontrez notre équipe passionnée et dévouée.',
	},
	{
		imagePath: '/assets/layout/4O3A9427.jpg',
		title: 'Service',
		description: 'Profitez de notre service client exceptionnel.',
	},
	{
		imagePath: '/assets/layout/4O3A9724.jpg',
		title: 'Combinaison',
		description: 'Une combinaison parfaite de saveurs traditionnelles et modernes.',
	},
	{
		imagePath: '/assets/layout/4O3A9784-2.jpg',
		title: 'Tapas',
		description: 'Dégustez nos délicieux tapas coréens.',
	},
];

const black = '#000000';
const white = '#FFFFFF';

interface GalleryItemProps {
	image: string;
}

const Gallery = styled(Box)(({ theme }) => ({
	width: '100vw',
	listStyle: 'none',
	padding: 0,
	margin: 0,
	display: 'flex',
	height: '90vh',
	[theme.breakpoints.down('lg')]: {
		height: '150vh',
		flexDirection: 'column',
	},
}));

const GalleryItem = styled(Box)<GalleryItemProps>(({ theme, image }) => ({
	flex: 1,
	transition: 'all 0.5s',
	position: 'relative',
	overflow: 'hidden',
	background: `url(${image}) no-repeat center center`,
	backgroundSize: 'cover',
	cursor: 'pointer',
	'&:last-child': {
		borderRight: 'none',
	},
	'&:hover': {
		flex: 4,
		'.content': {
			bottom: 0,
		},
	},
	[theme.breakpoints.down('lg')]: {
		flex: 2,
		'&:hover': {
			flex: 2,
		},
	},
}));

const Content = styled(Box)(({ theme }) => ({
	position: 'absolute',
	backgroundColor: black,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	textAlign: 'center',
	height: '250px',
	bottom: '-320px',
	transition: 'bottom 0.5s ease, transform 0.2s ease-out',
	padding: '50px 20px 20px',
	boxSizing: 'border-box',
	width: '100%',
	zIndex: 10,
	'&::before': {
		content: '""',
		position: 'absolute',
		backgroundColor: black,
		width: '100%',
		height: '80px',
		left: 0,
		top: '-10px',
		transformOrigin: 'left bottom',
		transform: 'rotate(-3deg) scale(1.3)',
	},
	[theme.breakpoints.down('lg')]: {
		bottom: 0,
		height: '100%',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		backdropFilter: 'blur(2.5px)',
		WebkitBackdropFilter: 'blur(2.5px)',
		'&::before': {
			display: 'none',
		},
	},
}));

const Layout = () => {
	const theme = useTheme();
	const isLgDown = useMediaQuery(theme.breakpoints.down('lg'));

	return (
		<Gallery component='ul'>
			{items.map((item, index) => (
				<GalleryItem key={index} image={item.imagePath} component='li'>
					<div>
						<Content className='content'>
							<Typography variant={isLgDown ? 'h5' : 'h5'} color={white}>
								{item.title}
							</Typography>
							<Typography variant={isLgDown ? 'h6' : 'h6'} color={white}>
								{item.description}
							</Typography>
						</Content>
					</div>
				</GalleryItem>
			))}
		</Gallery>
	);
};

export default Layout;

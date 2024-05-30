import React from 'react';
import { ButtonBase } from '@mui/material';
import { styled } from '@mui/system';

const Outline = () => {
	return (
		<Container>
			<BackgroundImage />
			<StyledButton data-text='Seoul Lab'>Seoul Lab</StyledButton>
		</Container>
	);
};

export default Outline;

const Container = styled('div')(({ theme }) => ({
	position: 'relative',
	width: '100vw',
	marginTop: '30rem',
	height: '80vh',
	overflow: 'hidden',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const BackgroundImage = styled('div')({
	position: 'absolute',
	width: '100%',
	height: '100%',
	backgroundImage: 'url("assets/4O3A9566.jpg")',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	zIndex: -1,
});

const StyledButton = styled(ButtonBase)(({ theme }) => ({
	fontFamily: 'Orbitron',
	color: 'transparent',
	textDecoration: 'none',
	fontWeight: 500,
	fontSize: '10rem',
	WebkitTextStroke: '2px #fff',
	position: 'relative',
	transition: '0.3s',
	backgroundColor: 'transparent',
	[theme.breakpoints.down('md')]: {
		fontSize: '6rem',
		WebkitTextStroke: '1px #fff',
	},
	[theme.breakpoints.down('sm')]: {
		fontSize: '4rem',
		WebkitTextStroke: '1px #fff',
	},
	'&::before, &::after': {
		content: 'attr(data-text)',
		WebkitTextStroke: '1px transparent',
		position: 'absolute',
		top: 0,
		left: 0,
		transition: '0.3s',
		opacity: 0,
	},
	'&::before': {
		color: '#241A1A',
	},
	'&::after': {
		color: '#F5A202',
	},
	'&:hover': {
		color: '#fff',
		'&::before': {
			opacity: 1,
			transform: 'translate(10px, -10px)',
		},
		'&::after': {
			opacity: 1,
			transform: 'translate(20px, -20px)',
		},
	},
}));

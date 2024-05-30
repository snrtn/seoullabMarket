import React from 'react';
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

const Instagram = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center',
				backgroundColor: '#181818',
				color: '#f1f1f1',
				padding: '80px',
				margin: '50rem 0',
				width: '100%',
				boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
			}}
		>
			<Typography variant='h6' sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
				Suivez-nous sur Instagram
			</Typography>
			<Typography
				variant='h6'
				sx={{
					marginBottom: '20px',
					fontSize: isMobile ? '1rem' : 'inherit',
				}}
			>
				Découvrez les coulisses de notre restaurant, les nouveaux plats, et bien plus encore en nous suivant sur
				Instagram!
			</Typography>
			<Button
				variant='contained'
				color='primary'
				startIcon={<InstagramIcon />}
				onClick={() => window.open('https://www.instagram.com/restaurant.seoul.lab/', '_blank')}
			>
				Suivez-nous
			</Button>
		</Box>
	);
};

export default Instagram;

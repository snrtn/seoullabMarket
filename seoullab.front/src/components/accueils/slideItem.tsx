import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

interface SlideProps {
	title: string;
	description: string;
	image: string;
}

const SlideItem: React.FC<SlideProps> = ({ title, description, image }) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100%',
				width: '100%',
				backgroundImage: `url(${image})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				color: '#fff',
				textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
				margin: 0,
				padding: 0,
				boxSizing: 'border-box',
				position: 'relative',
				'&::before': {
					content: '""',
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundColor: 'rgba(0, 0, 0, 0.35)',
					zIndex: 1,
				},
				'& > *': {
					position: 'relative',
					zIndex: 2,
				},
			}}
		>
			<Box
				sx={{
					width: isMobile ? '90%' : isTablet ? '70%' : '42rem',
					padding: isMobile ? '10px' : '20px',
					textAlign: 'center',
				}}
			>
				<Typography variant={isMobile ? 'h5' : 'h4'} sx={{ margin: 0, padding: 0 }}>
					{title}
				</Typography>
				<Typography variant={isMobile ? 'body1' : 'h6'} sx={{ margin: 0, padding: 0 }}>
					{description}
				</Typography>
			</Box>
		</Box>
	);
};

export default SlideItem;

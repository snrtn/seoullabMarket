import React from 'react';
import { Box, useTheme, useMediaQuery, SxProps, Theme } from '@mui/material';

interface SectionLayoutProps {
	desktop: string | number;
	tablet?: string | number;
	mobile?: string | number;
	children: React.ReactNode;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({ desktop, tablet, mobile, children }) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

	const height = isMobile ? mobile : isTablet ? tablet : desktop;

	const style: SxProps<Theme> = {
		height: height,
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		padding: 0,
		margin: 0,
		boxSizing: 'border-box',
	};

	return <Box sx={style}>{children}</Box>;
};

export default SectionLayout;

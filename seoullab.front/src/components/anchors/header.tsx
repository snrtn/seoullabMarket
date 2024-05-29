import React from 'react';
import { AppBar, Typography } from '@mui/material';
import { StyledContainer, StyledToolbar } from './header.styles';

const Header: React.FC = () => {
	return (
		<AppBar position='fixed' color='primary'>
			<StyledContainer maxWidth='lg'>
				<StyledToolbar disableGutters>
					<Typography variant='h1' component='div'>
						Seoul Lab
					</Typography>
				</StyledToolbar>
			</StyledContainer>
		</AppBar>
	);
};

export default Header;

import { styled } from '@mui/system';
import { Container, Toolbar, Typography } from '@mui/material';

export const StyledContainer = styled(Container)({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
});

export const StyledToolbar = styled(Toolbar)({
	justifyContent: 'center',
	width: '100%',
});

export const StyledTypography = styled(Typography)({
	flexGrow: 1,
	textAlign: 'center',
});

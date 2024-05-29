import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		fontFamily: 'Titillium Web, Arial, sans-serif',
		h1: {
			fontFamily: 'Orbitron, Arial, sans-serif',
			fontSize: '24px',
			fontWeight: 600,
		},
	},
	palette: {
		primary: {
			main: '#181818',
		},
	},
});

export default theme;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// components
import App from './App';
import theme from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<App />
			</Router>
		</ThemeProvider>
	</React.StrictMode>,
);

/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Box } from '@mui/material';

const GoogleMap = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '60%',
				marginBottom: '40px',
				border: '1px solid #ccc',
				borderRadius: '8px',
				overflow: 'hidden',
			}}
		>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.873651776578!2d2.3652064126286514!3d48.8606196712129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d3333788457%3A0xc919bbbf8c99f456!2sSEOUL%20LAB!5e0!3m2!1sfr!2sfr!4v1714521596819!5m2!1sfr!2sfr'
				width='100%'
				height='100%'
				allowFullScreen
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
				style={{ border: 0 }}
			></iframe>
		</Box>
	);
};

export default GoogleMap;

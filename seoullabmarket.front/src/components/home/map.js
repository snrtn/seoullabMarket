/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
	position: relative;
	width: 130rem;
	height: 50rem;
	iframe {
		width: 100%;
		height: 100%;
	}
	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.2);
		pointer-events: none;
	}
`;

const Map = () => {
	return (
		<MapContainer>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.873651776578!2d2.3652064126286514!3d48.8606196712129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d3333788457%3A0xc919bbbf8c99f456!2sSEOUL%20LAB!5e0!3m2!1sfr!2sfr!4v1714521596819!5m2!1sfr!2sfr'
				allowFullScreen=''
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
			></iframe>
		</MapContainer>
	);
};

export default Map;

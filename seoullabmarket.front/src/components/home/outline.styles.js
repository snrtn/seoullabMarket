import styled from 'styled-components';
import colors from '../../styles/color.styles';
import device from '../../styles/mediaQuerie.styles';

export const Button = styled.button`
	color: transparent;
	text-decoration: none;
	font-size: 10em;
	font-weight: 500;
	-webkit-text-stroke: 2px #fff;
	position: absolute;
	transition: 0.3s;
	background-color: transparent;
	${device.lg} {
		font-size: 8em;
	}
	${device.sm} {
		font-size: 6em;
	}

	&::before,
	&::after {
		content: attr(data-text);
		-webkit-text-stroke: 1px transparent;
		position: absolute;
		top: 0;
		left: 0;
		transition: 0.3s;
		opacity: 0;
	}

	&::before {
		color: ${colors.black};
	}

	&::after {
		color: ${colors.orange};
	}

	&:hover {
		color: #fff;

		&::before {
			opacity: 1;
			transform: translate(10px, -10px);
		}

		&::after {
			opacity: 1;
			transform: translate(20px, -20px);
		}
	}
`;

import styled from 'styled-components';
import device from '../../styles/mediaQuerie.styles';

export const Photo = styled.div`
	position: relative;
	height: 389px;
	margin-left: 2rem;

	div {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	img {
		width: 68vh;
		height: 50vh;
		object-fit: cover;
		position: absolute;
		transition: 0.5s;
		border-radius: 0.8rem;
		&:first-child {
			z-index: 1;
		}
		&:last-child {
			opacity: 0;
		}
		${device.xl} {
			width: 62vh;
		}
		${device.lg} {
			width: 30vh;
			height: 38vh;
		}
	}

	&:hover img:first-child {
		opacity: 0;
	}

	&:hover img:last-child {
		opacity: 1;
	}
`;

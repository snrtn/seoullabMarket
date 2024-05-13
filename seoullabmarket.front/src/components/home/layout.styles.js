import styled from 'styled-components';
import device from '../../styles/mediaQuerie.styles';
import colors from '../../styles/color.styles';

export const Gallery = styled.ul`
	width: 100vw;
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	height: 100vh;
	background-color: ${colors.black};
	padding: 10rem 0;
	${device.lg} {
		height: 150vh;
		flex-direction: column;
	}
`;

export const GalleryItem = styled.li`
	flex: 1;
	transition: all 0.5s;
	position: relative;
	overflow: hidden;

	&:last-child {
		border-right: none;
	}

	&:hover {
		flex: 4;

		.content {
			bottom: 0;
		}
	}

	${device.lg} {
		flex: 2;
		&:hover {
			flex: 2;
		}
	}

	${({ image }) =>
		image &&
		`
    background: url(${image}) no-repeat center center;
    background-size: cover;
  `}
`;

export const Content = styled.div`
	position: absolute;
	background-color: ${colors.black};
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	height: 250px;
	bottom: -320px;
	transition: bottom 0.5s ease, transform 0.2s ease-out;
	padding: 50px 20px 20px;
	box-sizing: border-box;
	width: 100%;
	z-index: 10;

	&::before {
		content: '';
		position: absolute;
		background-color: ${colors.black};
		width: 100%;
		height: 80px;
		left: 0;
		top: -10px;
		transform-origin: left bottom;
		transform: rotate(-3deg) scale(1.3);
	}

	${device.lg} {
		bottom: 0;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(2.5px);
		-webkit-backdrop-filter: blur(2.5px);

		&::before {
			display: none;
		}
	}
`;

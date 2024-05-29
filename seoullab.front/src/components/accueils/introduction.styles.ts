import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const Frame = styled(Box)`
	display: flex;
	justify-content: center;
	gap: 40px;
	margin-bottom: 80px;
	cursor: pointer;
`;

export const Hexagon = styled(Box, {
	shouldForwardProp: (prop) => prop !== 'hovered',
})<{ hovered: boolean }>`
	width: 300px;
	height: 350px;
	position: relative;
	transition: 0.5s;
	${({ hovered }) =>
		hovered &&
		`
    transform: translateY(-60px);
  `}

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 60px;
		background: radial-gradient(rgba(0, 0, 0, 1), transparent, transparent);
		bottom: -70px;
		left: 0;
		transition: 0.5s;
		opacity: 0;
	}

	${({ hovered }) =>
		hovered &&
		`
    &::before {
      opacity: 0.6;
      transform: scale(0.8);
      bottom: -130px;
    }
  `}
`;

export const Shape = styled(Box)`
	clip-path: polygon(50% 0, 100% 30%, 100% 70%, 50% 100%, 0 70%, 0 30%);
	width: inherit;
	height: inherit;
	position: absolute;
	overflow: hidden;
`;

export const ShapeImage = styled('img', {
	shouldForwardProp: (prop) => prop !== 'hovered',
})<{ hovered: boolean }>`
	width: inherit;
	height: inherit;
	object-fit: cover;
	object-position: center;
	transition: filter 0.5s;

	${({ hovered }) =>
		hovered &&
		`
    filter: blur(4px) brightness(0.7);
  `}
`;

export const Caption = styled(Box)`
	position: absolute;
	width: inherit;
	height: inherit;
	color: #fff;
	transition: 0.5s;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	padding: 20px;
	opacity: 0;
	transform: translateY(20px);
`;

export const BackgroundGradient = styled(Caption)`
	clip-path: polygon(50% 0, 100% 30%, 100% 70%, 50% 100%, 0 70%, 0 30%);
	background: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	transition: opacity 0.5s;
	opacity: 0;
`;

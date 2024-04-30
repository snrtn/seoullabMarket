import styled from 'styled-components';
import device from '../../styles/mediaQuerie.styles';

export const Frame = styled.div`
	display: flex;
	gap: 40px;
	${device.sm} {
		flex-direction: column;
		gap: 60px;
	}
`;

export const Hexagon = styled.div`
	width: 400px;
	height: 450px;
	position: relative;
	transition: 0.5s;
	${device.lg} {
		width: 220px;
		height: 250px;
	}
	${device.sm} {
		width: 260px;
		height: 250px;
	}
	&:hover {
		transform: translateY(-60px);
	}
	&:before {
		content: '';
		position: absolute;
		width: 100%;
		height: 60px;
		background: radial-gradient(rgba(0, 0, 0, 1), transparent, transparent);
		bottom: -70px;
		transition: 0.5s;
		opacity: 0;
	}
	&:hover:before {
		opacity: 0.6;
		transform: scale(0.8);
		bottom: -130px;
	}
`;

export const Shape = styled.div`
	clip-path: polygon(50% 0, 100% 30%, 100% 70%, 50% 100%, 0 70%, 0 30%);
	width: inherit;
	height: inherit;
	position: absolute;
	overflow: hidden;
`;

export const ShapeImage = styled.img`
	width: inherit;
	height: inherit;
	object-fit: cover;
	object-position: center;
`;

export const Caption = styled.div`
	position: absolute;
	width: inherit;
	height: inherit;
	color: #fff;
	transition: 0.5s;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 20px;
	opacity: 0;
	transform: translateY(20px);
	&:hover {
		opacity: 1;
		transform: translateY(0);
	}
	h2 {
		font-size: 2em;
	}
`;

// 컴포넌트별 개별 배경 설정
export const BackgroundGradient = styled(Caption)`
	clip-path: polygon(50% 0, 100% 30%, 100% 70%, 50% 100%, 0 70%, 0 30%);
	background: rgba(000, 000, 000, 0.2);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
`;

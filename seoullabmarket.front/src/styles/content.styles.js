import styled from 'styled-components';
import device from './mediaQuerie.styles';
import isPropValid from '@emotion/is-prop-valid';

const StyledImage = styled.img.withConfig({
	shouldForwardProp: (prop) => isPropValid(prop) && prop !== !['objectFit', 'Glassmorphism'],
})`
	width: ${({ width }) => width || '100%'};
	height: ${({ height }) => height || '100%'};
	max-width: ${({ maxWidth }) => maxWidth || '100%'};
	max-height: ${({ maxHeight }) => maxHeight || '100%'};
	object-fit: ${({ objectFit }) => objectFit || 'cover'};
	${({ Glassmorphism }) =>
		Glassmorphism &&
		`
			z-index: -99;
			position: absolute;
	`}
`;

const Image = ({ src, maxWidth, maxHeight, objectFit, ...props }) => {
	return <StyledImage src={src} maxWidth={maxWidth} maxHeight={maxHeight} objectFit={objectFit} {...props} />;
};

const Content = {
	Box: styled.div.withConfig({
		shouldForwardProp: (prop) =>
			isPropValid(prop) &&
			![
				'flexDirection',
				'lgFlexDirection',
				'smFlexDirection',
				'maxWidth',
				'maxHeight',
				'lgMaxWidth',
				'lgMaxHeight',
				'smMaxWidth',
				'smMaxHeight',
				'backgroundColor',
			].includes(prop),
	})`
		display: flex;
		justify-content: ${({ justifyContent }) => justifyContent || 'center'};
		align-items: ${({ alignItems }) => alignItems || 'center'};
		position: ${({ position }) => position || 'static'};
		flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
		width: 100%;
		max-width: ${({ maxWidth }) => maxWidth || '100%'};
		height: ${({ height }) => height || '100%'};
		max-height: ${({ maxHeight }) => maxHeight || '100%'};
		background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
		border-radius: 8px;
		padding: 0.6rem 2.6rem;
		overflow: auto;
		${({ Glassmorphism }) =>
			Glassmorphism &&
			`
			z-index: -66;
			position: absolute;
			background: rgba(000, 000, 000, 0.6);
			backdrop-filter: blur(5px);
			-webkit-backdrop-filter: blur(5px);
		`}
		${device.lg} {
			flex-direction: ${({ lgFlexDirection, flexDirection }) => (lgFlexDirection ? flexDirection : lgFlexDirection)};
			max-width: ${({ lgMaxWidth, maxWidth }) => (lgMaxWidth ? lgMaxWidth : maxWidth)};
			max-height: ${({ lgMaxHeight, maxHeight }) => (lgMaxHeight ? lgMaxHeight : maxHeight)};
		}
		${device.sm} {
			display: ${({ smDisplay }) => smDisplay || 'flex'};
			flex-direction: ${({ smFlexDirection, lgFlexDirection }) =>
				smFlexDirection ? smFlexDirection : lgFlexDirection};
			max-width: ${({ smMaxWidth, lgMaxWidth }) => (smMaxWidth ? smMaxWidth : lgMaxWidth)};
			max-height: ${({ smMaxHeight, lgMaxHeight }) => (smMaxHeight ? smMaxHeight : lgMaxHeight)};
		}
	`,
	Image,
};

export default Content;

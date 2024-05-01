import styled from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import device from './mediaQuerie.styles';

const Container = {
	Section: styled.section.withConfig({
		shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'position',
	})`
		display: flex;
		justify-content: center;
		align-items: center;
		position: ${({ position }) => position || 'static'};
		flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
		width: ${({ width }) => width || '100%'};
		height: ${({ height }) => height || '100%'};
		max-width: ${({ maxWidth }) => maxWidth || '100%'};
		max-height: ${({ maxHeight }) => maxHeight || '100%'};
	`,
	Wrapper: styled.div.withConfig({
		shouldForwardProp: (prop) =>
			isPropValid(prop) &&
			![
				'position',
				'flexDirection',
				'maxWidth',
				'maxHeight',
				'lgFlexDirection',
				'lgMaxWidth',
				'lgMaxHeight',
				'smFlexDirection',
				'smMaxWidth',
				'smMaxHeight',
				'justifyContent',
			].includes(prop),
	})`
		display: flex;
		justify-content: ${({ justifyContent }) => justifyContent || 'center'};
		align-items: ${({ alignItems }) => alignItems || 'center'};
		position: ${({ position }) => position || 'static'};
		flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
		background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
		width: ${({ width }) => width || '100%'};
		height: ${({ height }) => height || '100%'};
		max-width: ${({ maxWidth }) => maxWidth || '100%'};
		max-height: ${({ maxHeight }) => maxHeight || '100%'};
		${device.lg} {
			flex-direction: ${({ lgFlexDirection, flexDirection }) => lgFlexDirection || flexDirection};
			max-width: ${({ lgMaxWidth }) => lgMaxWidth || '100%'};
			max-height: ${({ lgMaxHeight }) => lgMaxHeight || '100%'};
		}
		${device.sm} {
			flex-direction: ${({ smFlexDirection, flexDirection }) => smFlexDirection || flexDirection};
			max-width: ${({ smMaxWidth }) => smMaxWidth || '100%'};
			max-height: ${({ smMaxHeight }) => smMaxHeight || '100%'};
		}
	`,
	Article: styled.article.withConfig({
		shouldForwardProp: (prop) =>
			isPropValid(prop) &&
			![
				'position',
				'flex',
				'flexDirection',
				'maxWidth',
				'maxHeight',
				'lgFlex',
				'lgFlexDirection',
				'lgMaxWidth',
				'lgMaxHeight',
				'smDisplay',
				'smFlex',
				'smFlexDirection',
				'smMaxWidth',
				'smMaxHeight',
				'Glassmorphism',
				'smWidth',
				'smHeight',
				'lgWidth',
				'lgHeight',
				'smAlignItems',
				'justifyContent',
				'alignItems',
				'lgPadding',
				'xlPadding',
			].includes(prop),
	})`
		display: flex;
		justify-content: ${({ justifyContent }) => justifyContent || 'center'};
		align-items: ${({ alignItems }) => alignItems || 'center'};
		position: ${({ position }) => position || 'static'};
		flex: ${({ flex }) => flex || 1};
		flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
		background-color: ${({ backgroundColor }) => backgroundColor || 'none'};
		width: ${({ width }) => width || '100%'};
		height: ${({ height }) => height || '100%'};
		max-width: ${({ maxWidth }) => maxWidth || '100%'};
		max-height: ${({ maxHeight }) => maxHeight || '100%'};
		${({ Glassmorphism }) =>
			Glassmorphism &&
			`
			position: absolute;
			background: rgba(000, 000, 000, 0.6);
			backdrop-filter: blur(5px);
			-webkit-backdrop-filter: blur(5px);
		`}
		${device.xl} {
			padding: ${({ xlPadding }) => xlPadding || '0'};
		}
		${device.lg} {
			flex: ${({ lgFlex }) => lgFlex || 1};
			flex-direction: ${({ lgFlexDirection, flexDirection }) => lgFlexDirection || flexDirection};
			width: ${({ lgWidth }) => lgWidth || '100%'};
			height: ${({ lgHeight }) => lgHeight || '100%'};
			max-width: ${({ lgMaxWidth }) => lgMaxWidth || '100%'};
			max-height: ${({ lgMaxHeight }) => lgMaxHeight || '100%'};
			padding: ${({ lgPadding, xlPadding }) => (lgPadding ? xlPadding : lgPadding)};
		}
		${device.sm} {
			display: ${({ smDisplay }) => smDisplay || 'flex'};
			flex: ${({ smFlex }) => smFlex || 1};
			align-items: ${({ smAlignItems }) => smAlignItems || 'center'};
			flex-direction: ${({ smFlexDirection, flexDirection }) => smFlexDirection || flexDirection};
			width: ${({ smWidth }) => smWidth || '100%'};
			height: ${({ smHeight }) => smHeight || '100%'};
			max-width: ${({ smMaxWidth }) => smMaxWidth || '100%'};
			max-height: ${({ smMaxHeight }) => smMaxHeight || '100%'};
		}
	`,
};

export default Container;

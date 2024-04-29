import styled from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import device from './mediaQuerie.styles';
import colors from './color.styles';
import { Link } from 'react-router-dom';

const Typography = {
	H1: styled.h1.withConfig({
		shouldForwardProp: (prop) => isPropValid(prop) && !['$fontWeight', '$textAlign', '$color'].includes(prop),
	})`
		font-size: 3.6rem;
		line-height: 4.5rem;
		font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
		text-align: ${({ textAlign }) => textAlign || 'left'};
		color: ${({ color }) => color || colors.black};
		letter-spacing: 0.05rem;
		${device.xl} {
			font-size: 3rem;
			line-height: 3.75rem;
		}
		${device.lg} {
			font-size: 2.4rem;
			line-height: 3rem;
		}
	`,
	H2: styled.h2.withConfig({
		shouldForwardProp: (prop) => isPropValid(prop) && !['fontWeight', 'textAlign', 'color'].includes(prop),
	})`
		font-size: 3rem;
		line-height: 3.75rem;
		font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
		text-align: ${({ textAlign }) => textAlign || 'left'};
		color: ${({ color }) => color || colors.black};
		letter-spacing: 0.04rem;
		${device.xl} {
			font-size: 2.4rem;
			line-height: 3rem;
		}
		${device.lg} {
			font-size: 2rem;
			line-height: 2.5rem;
		}
	`,
	H3: styled.h3.withConfig({
		shouldForwardProp: (prop) => isPropValid(prop) && !['fontWeight', 'textAlign', 'color'].includes(prop),
	})`
		font-size: 2.4rem;
		line-height: 3rem;
		font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
		text-align: ${({ textAlign }) => textAlign || 'left'};
		color: ${({ color }) => color || colors.black};
		letter-spacing: 0.03rem;
		${device.xl} {
			font-size: 2rem;
			line-height: 2.5rem;
		}
		${device.lg} {
			font-size: 1.8rem;
			line-height: 2.25rem;
		}
	`,
	P: styled.p.withConfig({
		shouldForwardProp: (prop) => isPropValid(prop) && !['fontWeight', 'textAlign', 'color'].includes(prop),
	})`
		font-size: 1.6rem;
		line-height: 2rem;
		font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
		text-align: ${({ textAlign }) => textAlign || 'left'};
		color: ${({ color }) => color || colors.black};
		letter-spacing: 0.01rem;
		${({ textAlign }) =>
			textAlign === 'justify' &&
			`
				text-align-last: left;
        hyphens: auto;
        text-justify: inter-word;
        letter-spacing: normal;
    `}
		${device.md} {
			font-size: 1.4rem;
			line-height: 1.75rem;
		}
	`,
	A: styled(Link).withConfig({
		shouldForwardProp: (prop) =>
			isPropValid(prop) && !['fontWeight', 'textAlign', 'color', 'highlight', 'highlightColor'].includes(prop),
	})`
		font-size: 1.6rem;
		line-height: 2rem;
		font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
		text-align: ${({ textAlign }) => textAlign || 'left'};
		color: ${({ color }) => color || colors.black};
		letter-spacing: 0.01rem;
		${({ highlight, highlightColor }) =>
			highlight &&
			`
        position: relative;
        z-index: 1;
        &::before {
          content: '';
          position: absolute;
          z-index: -1;
          top: 0;
          bottom: 0;
          left: -0.25em;
          right: -0.25em;
          background-color: ${highlightColor || colors.black};
          transform-origin: center right;
          transform: scaleX(0);
          transition: transform 0.2s ease-in-out;
          border-radius: 0.2rem;
				}
        &:hover {
          color: ${colors.white};
        }
        &:hover::before {
          transform: scaleX(1);
          transform-origin: center left;
        }
      `}
		${device.md} {
			font-size: 1.4rem;
			line-height: 1.75rem;
		}
	`,
};

export default Typography;

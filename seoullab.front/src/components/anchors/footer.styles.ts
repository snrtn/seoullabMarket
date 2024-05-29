import { styled } from '@mui/material';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

interface StyledLinkProps {
	highlight?: boolean;
	highlightColor?: string;
}

export const SnsSection = styled(Box)`
	border-radius: 10px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.13);
`;

export const StyledLink = styled(Link)<{ bgColor: string }>`
	display: inline-block;
	border: 0.1rem solid transparent;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: #fff;
	text-align: center;
	line-height: 0.8em;
	font-size: 2.4rem;
	margin: 0 10px;
	position: relative;
	overflow: hidden;

	&:before {
		content: '';
		position: absolute;
		width: 100%;
		height: 0;
		bottom: 0;
		left: 0;
		transition: 0.5s;
		background-color: ${(props) => props.bgColor};
	}

	&:hover:before {
		height: 100%;
	}

	.fa {
		position: relative;
		transition: 0.5s;
		font-size: 25px;
		color: #000;
	}

	&:hover .fa {
		transform: rotateY(360deg);
		color: #fff;
	}
`;
export const CustomLink = styled(Link, {
	shouldForwardProp: (prop) => prop !== 'highlight' && prop !== 'highlightColor',
})<StyledLinkProps>(({ highlight, highlightColor }) => ({
	position: 'relative',
	zIndex: 1,
	color: '#fff',
	textDecoration: 'none',
	'&::before': {
		content: highlight ? '""' : undefined,
		position: 'absolute',
		zIndex: -1,
		top: 0,
		bottom: 0,
		left: '-0.25em',
		right: '-0.25em',
		backgroundColor: highlightColor,
		transformOrigin: 'center right',
		transform: highlight ? 'scaleX(0)' : undefined,
		transition: 'transform 0.2s ease-in-out',
		borderRadius: '0.2rem',
	},
	'&:hover': {
		color: highlight,
	},
	'&:hover::before': {
		transform: highlight ? 'scaleX(1)' : undefined,
		transformOrigin: 'center left',
	},
}));

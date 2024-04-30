import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SnsSection = styled.div`
	border-radius: 10px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.13);
`;

export const StyledLink = styled(({ bgColor, ...rest }) => <Link {...rest} />)`
	display: inline-block;
	border: 0.1rem solid transparent;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: #fff;
	text-align: center;
	line-height: 4.5rem;
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
	}

	&:hover .fa {
		transform: rotateY(360deg);
		color: #fff;
	}
`;

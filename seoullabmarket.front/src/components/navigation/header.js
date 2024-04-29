import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav>
			<Link to='/'>홈</Link>
			<Link to='/menu'>메뉴</Link>
			<Link to='/gallery'>갤러리</Link>
		</nav>
	);
};

export default Header;

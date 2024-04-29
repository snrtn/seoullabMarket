import React from 'react';
import Typography from '../../styles/typography.styles';
import Content from '../../styles/content.styles';

const MenuPage = () => {
	return (
		<Content.Box maxWidth={'120rem'}>
			<Content.Box justifyContent={'space-between'} maxWidth={'60rem'}>
				<Typography.A to='/menu/starters'>starters</Typography.A>
				<Typography.A to='/menu/mains'>mains</Typography.A>
				<Typography.A to='/menu/desserts'>desserts</Typography.A>
				<Typography.A to='/menu/drinks'>drinks</Typography.A>
			</Content.Box>
		</Content.Box>
	);
};

export default MenuPage;

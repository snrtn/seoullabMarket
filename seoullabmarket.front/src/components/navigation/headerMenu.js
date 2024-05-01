import React from 'react';
import Typography from '../../styles/typography.styles';
import Content from '../../styles/content.styles';

const MenuPage = () => {
	return (
		<Content.Box maxWidth={'120rem'} maxHeight={'6.4rem'}>
			<Content.Box justifyContent={'space-between'} maxWidth={'60rem'}>
				<Typography.A to='starters'>Entrées</Typography.A>
				<Typography.A to='mains'>Plats</Typography.A>
				<Typography.A to='desserts'>Desserts</Typography.A>
				<Typography.A to='drinks'>Boissons</Typography.A>
			</Content.Box>
		</Content.Box>
	);
};

export default MenuPage;

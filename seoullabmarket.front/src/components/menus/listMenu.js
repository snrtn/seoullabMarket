import React from 'react';
import { mockData } from './mockData';
import Container from '../../styles/container.styles';
import Typography from '../../styles/typography.styles';
import Content from '../../styles/content.styles';

const ListMenu = ({ endpoint }) => {
	const items = mockData[endpoint] || [];
	const groupedItems = {};

	if (endpoint === 'drinks') {
		items.forEach((item) => {
			if (!groupedItems[item.category]) {
				groupedItems[item.category] = [];
			}
			groupedItems[item.category].push(item);
		});
	}

	const categoryTranslations = {
		redWine: 'Vin Rouge 75cl',
		whiteWine: 'Vin Blanc 75cl',
		roseWine: 'Vin Rosé 75cl',
		champagne: 'Champagne',
		beer: 'Bière',
		tea: 'Thé',
		coffee: 'Café',
		juice: 'Jus',
		softDrink: 'Boisson Gazeuse',
	};

	return (
		<Container.Wrapper width={'60rem'} flexDirection={'column'} justifyContent={'left'} alignItems='left'>
			{endpoint === 'drinks' ? (
				Object.keys(groupedItems).map((category) => (
					<div key={category}>
						<ul>
							<Typography.H2 fontWeight={'bold'} highlight={true}>
								<Content.Image src={'/assets/drank.png'} width={'30px'} /> {categoryTranslations[category]}
							</Typography.H2>
							<br />
							{groupedItems[category].map((item) => (
								<li key={item.id} style={{ marginBottom: '2rem' }}>
									<Typography.H3 fontWeight={'500'} highlight={true}>
										<span>{item.name}</span>
									</Typography.H3>
									<Typography.P fontWeight={'300'} highlight={true}>
										<span>{item.description ? item.description : ''}</span>
									</Typography.P>
									<br />
									<Typography.P fontWeight={'500'} highlight={true}>
										<span>{item.price} euro(€)</span>
									</Typography.P>
								</li>
							))}
						</ul>
					</div>
				))
			) : (
				<ul>
					{items.map((item) => (
						<li key={item.id} style={{ margin: '4rem 0' }}>
							<Typography.H3 fontWeight={'500'} highlight={true}>
								<Content.Image src={'/assets/food.png'} width={'30px'} /> <span>{item.name}</span>
							</Typography.H3>
							<Typography.P fontWeight={'300'} highlight={true}>
								<span>{item.description}</span>
							</Typography.P>
							<br />
							<Typography.P fontWeight={'500'} highlight={true}>
								<span>{item.price} euro(€)</span>
							</Typography.P>
						</li>
					))}
				</ul>
			)}
		</Container.Wrapper>
	);
};

export default ListMenu;

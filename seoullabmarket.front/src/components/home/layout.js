import React from 'react';
import { Gallery, GalleryItem, Content } from './layout.styles';
import Typography from '../../styles/typography.styles';
import colors from '../../styles/color.styles';

const Layout = () => {
	const items = [
		{
			imagePath: '/assets/layout/team.jpg',
			title: 'Équipe',
			description: 'Voici notre équipe dynamique et professionnelle',
		},
		{
			imagePath: '/assets/layout/service.jpg',
			title: 'Service',
			description: 'Découvrez notre approche exceptionnelle du service client',
		},
		{
			imagePath: '/assets/layout/combination.jpg',
			title: 'Combinaison',
			description: 'Une combinaison unique de saveurs qui éveille les sens',
		},
		{
			imagePath: '/assets/layout/tapas.jpg',
			title: 'Tapas',
			description: 'Savourez nos tapas, parfaits pour un partage convivial',
		},
		{
			imagePath: '/assets/layout/seoullab.jpg',
			title: 'Seoul Lab',
			description: 'Cuisine coréenne moderne',
		},
	];
	return (
		<Gallery>
			{items.map((item, index) => (
				<GalleryItem key={index} image={item.imagePath}>
					<div>
						<Content className='content'>
							<Typography.H2 color={colors.white}>{item.title}</Typography.H2>
							<Typography.P color={colors.white}>{item.description}</Typography.P>
						</Content>
					</div>
				</GalleryItem>
			))}
		</Gallery>
	);
};

export default Layout;

import { useState } from 'react';
import { Box, Button, Typography, ImageList, ImageListItem } from '@mui/material';

const images = [
	'assets/menus/4O3A9707.jpg',
	'assets/menus/4O3A9709.jpg',
	'assets/menus/4O3A9735.jpg',
	'assets/menus/4O3A9740.jpg',
	'assets/menus/4O3A9757.jpg',
	'assets/menus/4O3A9765.jpg',
	'assets/menus/4O3A9771.jpg',
	'assets/menus/4O3A9778.jpg',
	'assets/menus/4O3A9784.jpg',
	'assets/menus/4O3A9797.jpg',
	'assets/menus/4O3A9802.jpg',
	'assets/menus/4O3A9808.jpg',
	'assets/menus/4O3A9810.jpg',
	'assets/menus/4O3A9814.jpg',
	'assets/menus/4O3A9819.jpg',
	'assets/menus/4O3A9825.jpg',
	'assets/menus/4O3A9833.jpg',
	'assets/menus/4O3A9838.jpg',
];

const MenuPhoto = () => {
	const [visibleCount, setVisibleCount] = useState(8);

	const handleLoadMore = () => {
		setVisibleCount((prevCount) => prevCount + 6);
	};

	return (
		<Box sx={{ padding: '20px', height: '100%', overflowY: 'auto', maxWidth: '1200px', margin: '0 auto' }}>
			<Typography variant='h4' sx={{ margin: '20px', textAlign: 'center', fontWeight: 'bold' }}>
				Nos magnifiques photos de menu
			</Typography>
			<Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
				<Button
					variant='contained'
					color='primary'
					onClick={() => window.open('https://www.thefork.fr/restaurant/seoul-lab-r813745#booking', '_blank')}
				>
					Réserver et Voir les Menus
				</Button>
			</Box>
			<ImageList variant='masonry' cols={3} gap={8}>
				{images.slice(0, visibleCount).map((image, index) => (
					<ImageListItem key={index}>
						<img
							src={image}
							alt={`Menu item ${index + 1}`}
							loading='lazy'
							style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
						/>
					</ImageListItem>
				))}
			</ImageList>
			<Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
				<Button variant='contained' color='primary' onClick={handleLoadMore} disabled={visibleCount >= images.length}>
					Charger Plus
				</Button>
			</Box>
		</Box>
	);
};

export default MenuPhoto;

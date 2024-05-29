import React, { useState } from 'react';
import { Box, Button, Typography, ImageList, ImageListItem } from '@mui/material';

const images = [
	'assets/restaurant/IMG_8744.JPG',
	'assets/restaurant/IMG_8750.JPG',
	'assets/restaurant/IMG_8755.JPG',
	'assets/restaurant/IMG_8763.JPG',
	'assets/restaurant/IMG_8766.JPG',
	'assets/restaurant/IMG_8770.JPG',
	'assets/restaurant/IMG_8773.JPG',
	'assets/restaurant/IMG_8781.JPG',
	'assets/restaurant/IMG_8784.JPG',
	'assets/restaurant/IMG_8790.JPG',
	'assets/restaurant/IMG_8795.JPG',
	'assets/restaurant/IMG_8801.JPG',
	'assets/restaurant/IMG_8805.JPG',
	'assets/restaurant/IMG_8810.JPG',
	'assets/restaurant/IMG_8823.JPG',
	'assets/restaurant/IMG_8831.JPG',
	'assets/restaurant/IMG_8844.JPG',
	'assets/restaurant/IMG_8851.JPG',
	'assets/restaurant/IMG_8855.JPG',
];

const RestaurantPhoto = () => {
	const [visibleCount, setVisibleCount] = useState(8);

	const handleLoadMore = () => {
		setVisibleCount((prevCount) => prevCount + 6);
	};

	return (
		<Box sx={{ padding: '20px', height: '100%', overflowY: 'auto', maxWidth: '1200px', margin: '0 auto' }}>
			<Typography variant='h4' sx={{ margin: '20px', textAlign: 'center', fontWeight: 'bold' }}>
				Photos du restaurant
			</Typography>
			<ImageList variant='masonry' cols={3} gap={8}>
				{images.slice(0, visibleCount).map((image, index) => (
					<ImageListItem key={index}>
						<img
							src={image}
							alt={`Restaurant item ${index + 1}`}
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

export default RestaurantPhoto;

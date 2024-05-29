import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, LinearProgress, useMediaQuery } from '@mui/material';
import SlideItem from './slideItem';

const slides = [
	{
		title: 'Un festin coréen varié',
		description:
			"Un festin magnifique composé de divers plats coréens accompagné d'un verre de vin. Il y a du kimchi, des raviolis, des crêpes et bien d'autres plats coréens.",
		image: 'assets/slide/IMG_8759.jpg',
	},
	{
		title: 'Cuisine coréenne raffinée',
		description:
			"Un plat coréen préparé avec soin est servi dans une assiette. Des raviolis croustillants accompagnés d'une sauce savoureuse.",
		image: 'assets/slide/4O3A9785.jpg',
	},
	{
		title: 'Viande savoureuse et légumes frais',
		description:
			'Un plat coréen joliment présenté avec de la viande bien cuite et une salade de légumes frais. À déguster avec un verre de vin.',
		image: 'assets/slide/IMG_8765.jpg',
	},
	{
		title: "Intérieur chaleureux d'un restaurant coréen",
		description:
			'Un intérieur de restaurant coréen chaleureux et accueillant. Décoré avec divers objets et éclairages élégants.',
		image: 'assets/slide/4O3A9792.jpg',
	},
	{
		title: 'Plats coréens traditionnels et éclairage',
		description:
			"Une table remplie de plats coréens traditionnels avec un éclairage chaleureux. Une harmonie entre la cuisine traditionnelle et l'intérieur moderne.",
		image: 'assets/slide/IMG_8797.JPG',
	},
];

const Slider: React.FC = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [progress, setProgress] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);
	const progressInterval = useRef<NodeJS.Timeout | null>(null);

	const isMobile = useMediaQuery('(max-width:600px)');

	useEffect(() => {
		if (isPlaying) {
			progressInterval.current = setInterval(() => {
				setProgress((prev) => {
					if (prev >= 100) {
						setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
						return 0;
					}
					return prev + 1;
				});
			}, 50);
		}

		return () => {
			if (progressInterval.current) {
				clearInterval(progressInterval.current);
			}
		};
	}, [isPlaying]);

	const handlePlayPause = () => {
		setIsPlaying((prevIsPlaying) => !prevIsPlaying);
	};

	return (
		<Box
			sx={{
				width: '100%',
				height: '100vh',
				position: 'relative',
				overflow: 'hidden',
				margin: 0,
				padding: 0,
			}}
		>
			<SlideItem
				title={slides[currentSlide].title}
				description={slides[currentSlide].description}
				image={slides[currentSlide].image}
			/>
			<Box
				sx={{
					position: 'absolute',
					top: '76%',
					left: '50%',
					transform: 'translateX(-50%)',
					display: 'flex',
					gap: '5px',
					zIndex: 2, // 추가된 스타일
				}}
			>
				{slides.map((_, index) => (
					<LinearProgress
						key={index}
						variant='determinate'
						value={index === currentSlide ? progress : index < currentSlide ? 100 : 0}
						sx={{
							width: isMobile ? '70px' : '100px',
							height: isMobile ? '5px' : '10px',
							backgroundColor: 'rgba(255, 255, 255, 0.5)',
						}}
					/>
				))}
			</Box>
			<Button
				onClick={handlePlayPause}
				variant='contained'
				sx={{
					position: 'absolute',
					top: '80%',
					right: '50%',
					transform: 'translate(50%, 50%)',
					zIndex: 2,
				}}
			>
				{isPlaying ? 'Pause' : 'Lecture'}
			</Button>
		</Box>
	);
};

export default Slider;

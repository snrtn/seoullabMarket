import React, { useState } from 'react';
import { Box, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import { Frame, Hexagon, Shape, ShapeImage, Caption, BackgroundGradient } from './introduction.styles';

const Introduction: React.FC = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const sections = [
		{
			title: 'Notre mission',
			description:
				'Fournir à nos clients la meilleure expérience culinaire coréenne, en les touchant par la saveur et le service qui allient tradition et modernité.',
			image: 'assets/hexagon/4O3A9328.jpg',
		},
		{
			title: 'Nos valeurs',
			description:
				"Intégrité, passion, qualité et orientation client sont les valeurs qui nous guident dans la promotion de l'excellence de la cuisine coréenne.",
			image: 'assets/hexagon/4O3A9426.jpg',
		},
		{
			title: 'Notre vision',
			description:
				"Faire connaître l'excellence de la cuisine coréenne dans le monde et devenir une marque mondiale appréciée par tous.",
			image: 'assets/hexagon/4O3A9294.jpg',
		},
	];

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
				width: '100%',
				textAlign: 'center',
				padding: isMobile ? '20px' : '40px 20px',
				boxSizing: 'border-box',
			}}
		>
			<Grid container spacing={2} justifyContent='center' sx={{ maxWidth: '800px' }}>
				<Grid item xs={12}>
					<Typography variant={isMobile ? 'h5' : 'h4'} sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
						Une expérience culinaire coréenne unique
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant='body1' sx={{ padding: isMobile ? '0 10px' : '0' }}>
						Notre menu change périodiquement pour vous offrir les plats les plus frais et les plus excitants. Notre
						restaurant coréen combine harmonieusement tradition et modernité pour offrir à nos clients une expérience
						culinaire exceptionnelle. Profitez d'une variété de plats coréens préparés avec des ingrédients frais et des
						recettes authentiques.
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant='body1' sx={{ fontWeight: 'bold' }}>
						Adresse : 91 Rue Amelot, Paris 11e
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant='body1' sx={{ marginBottom: '80px', fontWeight: 'bold' }}>
						Horaires d'ouverture : Lun-Sam : 12h-14h / 19h-22h
					</Typography>
				</Grid>
			</Grid>
			<Box sx={{ maxWidth: '1200px', width: '100%' }}>
				<Grid container spacing={isMobile ? 2 : 4} justifyContent='center'>
					{sections.map((section, index) => (
						<Grid
							item
							xs={12}
							md={4}
							key={index}
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							<Frame>
								<Hexagon hovered={hoveredIndex === index}>
									<Shape>
										<ShapeImage src={section.image} alt={`Section ${index + 1}`} hovered={hoveredIndex === index} />
										<BackgroundGradient sx={{ opacity: hoveredIndex === index ? 1 : 0 }} />
									</Shape>
									<Caption
										sx={{
											opacity: hoveredIndex === index ? 1 : 0,
											transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(20px)',
										}}
									>
										<Typography variant={isMobile ? 'h6' : 'h5'} sx={{ fontWeight: 'bold' }}>
											{section.title}
										</Typography>
										<Typography variant='body2' sx={{ marginTop: '10px' }}>
											{section.description}
										</Typography>
									</Caption>
								</Hexagon>
							</Frame>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
};

export default Introduction;

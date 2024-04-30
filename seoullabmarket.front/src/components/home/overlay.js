import React from 'react';
import { Frame, Hexagon, Shape, ShapeImage, BackgroundGradient } from './overlay.styles';
import Typography from '../../styles/typography.styles';
import colors from '../../styles/color.styles';

const Overlay = () => {
	return (
		<Frame>
			<Typography.A to={'/menu/starters'}>
				<Hexagon>
					<Shape>
						<ShapeImage src={'/assets/starters.jpg'} />
					</Shape>
					<BackgroundGradient color='crimson'>
						<Typography.H2 color={colors.white}>Entrées</Typography.H2>
					</BackgroundGradient>
				</Hexagon>
			</Typography.A>
			<Typography.A to={'/menu/mains'}>
				<Hexagon>
					<Shape>
						<ShapeImage src={'/assets/mains.jpg'} />
					</Shape>
					<BackgroundGradient color='royalblue'>
						<Typography.H2 color={colors.white}>Plats</Typography.H2>
					</BackgroundGradient>
				</Hexagon>
			</Typography.A>
			<Typography.A to={'/menu/desserts'}>
				<Hexagon>
					<Shape>
						<ShapeImage src={'/assets/desserts.jpg'} />
					</Shape>
					<BackgroundGradient color='yellowgreen'>
						<Typography.H2 color={colors.white}>Desserts</Typography.H2>
					</BackgroundGradient>
				</Hexagon>
			</Typography.A>
		</Frame>
	);
};

export default Overlay;

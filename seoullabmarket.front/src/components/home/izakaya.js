/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Container from '../../styles/container.styles';
import Typography from '../../styles/typography.styles';
import colors from '../../styles/color.styles';
import { Photo } from './izakaya.styles';

function Izakaya() {
	return (
		<Container.Section>
			<Container.Wrapper width={'130rem'} smFlexDirection={'column'}>
				<Container.Article
					flexDirection={'column'}
					alignItems={'left'}
					xlAlignItems={'center'}
					xlPadding={'0 1rem 0 3rem'}
				>
					<Typography.H1 color={colors.white} smTextAlign={'center'} highlight={true}>
						<span>Cuisine coréenne moderne</span>
					</Typography.H1>
					<Typography.H3 color={colors.white} smTextAlign={'center'} style={{ marginTop: '2rem' }}>
						Inspiré par une Taverne Coréenne Traditionnelle, Offrant des Tapas Coréens Style Snack
					</Typography.H3>
					<Typography.P color={colors.white} smTextAlign={'center'} style={{ marginTop: '1rem' }}>
						Seoul Lab 91 Rue Amelot, Paris 11e
						<br />
						Lun-Sam: 12h-14h30 / 19h-22h30
					</Typography.P>
					<Typography.A
						color={colors.orange}
						target='_blank'
						to='https://www.thefork.fr/restaurant/seoul-lab-r813745#booking='
						style={{ marginTop: '4rem' }}
					>
						Trouver une table avec TheFork{' '}
						<span>
							<img src={'/assets/anchor.svg'} alt='icon anchor' />
						</span>
					</Typography.A>
				</Container.Article>
				<Container.Article justifyContent={'left'} xlDisplay={'none'} smDisplay={'none'}>
					<Photo>
						<div>
							<img src='/assets/izakaya.jpg' alt='Product Image' />
							<img src='/assets/izakaya2.jpg' alt='Product Image Hover' />
						</div>
					</Photo>
				</Container.Article>
			</Container.Wrapper>
		</Container.Section>
	);
}

export default Izakaya;

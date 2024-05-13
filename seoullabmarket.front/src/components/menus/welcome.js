import React from 'react';
import Content from '../../styles/content.styles';
import Container from '../../styles/container.styles';
import images from './images';

const Welcome = () => {
	return (
		<Container.Article flexDirection={'column'}>
			<Content.Box></Content.Box>

			{images.map((images) => (
				<Content.Image src={images.url} key={images.id} objectFit={'contain'}></Content.Image>
			))}
		</Container.Article>
	);
};

export default Welcome;

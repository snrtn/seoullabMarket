import React from 'react';

// components
import SectionLayout from '../components/common/sectionLayout';
import Slide from '../components/accueils/slide';
import Introduction from '../components/accueils/introduction';
import MenuPhoto from '../components/accueils/menuPhoto';
import Instagram from '../components/accueils/instagram';
import RestaurantPhoto from '../components/accueils/restaurantPhoto';
import GoogleMap from '../components/accueils/googleMap';
import Layout from '../components/accueils/layout';

// styles
import { Box } from '@mui/material';

const AccueilView: React.FC = () => {
	return (
		<Box textAlign='center'>
			<SectionLayout desktop='90vh'>
				<Slide />
			</SectionLayout>
			<SectionLayout desktop='120vh' tablet='60vh' mobile='250vh'>
				<Introduction />
			</SectionLayout>
			<SectionLayout desktop='100%'>
				<MenuPhoto />
			</SectionLayout>
			<SectionLayout desktop='80vh' tablet='60vh' mobile='100vh'>
				<Instagram />
			</SectionLayout>
			<SectionLayout desktop='100%'>
				<RestaurantPhoto />
			</SectionLayout>
			<SectionLayout desktop='80vh' tablet='60vh' mobile='100vh'>
				<GoogleMap />
			</SectionLayout>
			<SectionLayout desktop='90vh' tablet='100%' mobile='100%'>
				<Layout />
			</SectionLayout>
		</Box>
	);
};

export default AccueilView;

import React from 'react';
import Section from './Section';
import styled from 'styled-components';

function Home() {
	return (
		<Container>
			<Section
				title="Model S"
				description="Order Online For Touchless Delivery"
				backgroundImg="model-s.jpg"
				leftBtnText="Custom order"
				rightBtnText="Existing inventory"
			/>
			<Section
				title="Model Y"
				description="Order Online For Touchless Delivery"
				backgroundImg="model-y.jpg"
				leftBtnText="Custom order"
				rightBtnText="Existing inventory"
			/>
			<Section
				title="Model 3"
				description="Order Online For Touchless Delivery"
				backgroundImg="model-3.jpg"
				leftBtnText="Custom order"
				rightBtnText="Existing inventory"
			/>
			<Section
				title="Model X"
				description="Order Online For Touchless Delivery"
				backgroundImg="model-x.jpg"
				leftBtnText="Custom order"
				rightBtnText="Existing inventory"
			/>
			<Section
				title="Lowest Cost Solar Panels in America"
				description="Money-back gaurantee"
				backgroundImg="solar-panel.jpg"
				leftBtnText="order now"
				rightBtnText="Learn more"
			/>
			<Section
				title="Solar for New Roofs"
				description="Solar Roof Costs Less Than a new Room"
				backgroundImg="solar-roof.jpg"
				leftBtnText="order now"
				rightBtnText="Learn more"
			/>
			<Section
				title="Accessories"
				description=""
				backgroundImg="accessories.jpg"
				leftBtnText="Shop now"
			/>
		</Container>
	);
}

export default Home;

const Container = styled.div`
	height: 100vh;
`;

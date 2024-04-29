import React from 'react';

const ListMenu = ({ endpoint }) => {
	return (
		<div>
			<ul>
				<li>{endpoint.toUpperCase()}</li>
			</ul>
		</div>
	);
};

export default ListMenu;

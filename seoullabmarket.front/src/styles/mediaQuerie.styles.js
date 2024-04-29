const size = {
	sm: '576px',
	md: '768px',
	lg: '992px',
	xl: '1200px',
};

const generateMediaQuery = (sizeKey, type) => {
	const condition = type === 'max' ? 'max-width' : 'min-width';
	return `@media (${condition}: ${size[sizeKey]})`;
};

const device = {
	sm: generateMediaQuery('sm', 'max'),
	md: generateMediaQuery('md', 'max'),
	lg: generateMediaQuery('lg', 'max'),
	xl: generateMediaQuery('xl', 'max'),
};

export default device;

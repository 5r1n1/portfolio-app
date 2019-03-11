import React from 'react';

const PFPortfolioItemPage = props =>
<div>
	<h1>Portfolio information</h1>
	<p>id: {props.match.params.id}</p>
</div>

export default PFPortfolioItemPage
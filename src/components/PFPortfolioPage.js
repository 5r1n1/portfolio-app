import React from 'react';
import { Link } from 'react-router-dom';


const PFRouter = () =>
		<div>
			<h1>Portfolio</h1>
			<Link to="/portfolio/99">Item#99</Link> 
			<Link to="/portfolio/100">Item#100</Link> 
			<Link to="/portfolio/101">Item#101</Link> 
			<Link to="/portfolio/102">Item#102</Link> 
		</div>

export default PFRouter
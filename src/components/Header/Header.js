import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
	return (
		<div className='header'>
			<img src={logo} alt='' />
			<div className='nav'>
				<a href='/shop'>Shop</a>
				<a href='/order'>Order Review</a>
				<a href='/inventory'>Manage Inventory here</a>
			</div>
		</div>
	);
};

export default Header;
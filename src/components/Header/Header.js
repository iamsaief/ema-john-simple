import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import {Link} from "react-router-dom";

const Header = () => {
	return (
		<div className="header">
			<Link to="/">
				<img src={logo} alt="" />
			</Link>
			<div className="nav">
				<Link to="/shop">Shop</Link>
				<Link to="/review">Order Review</Link>
				<Link to="/inventory">Manage Inventory here</Link>
			</div>
		</div>
	);
};

export default Header;

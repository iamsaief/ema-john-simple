import React from "react";
import "./Footer.css";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<div className='footer'>
			<p>
				&copy; {year} | build with <span>❤</span> by{" "}
				<a href='https://www.linkedin.com/in/saiefalemon/'>
					Saief Al Emon
				</a>
			</p>
		</div>
	);
};

export default Footer;

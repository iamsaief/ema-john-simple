import React from "react";
import "./Cart.css";

const Cart = (props) => {
	const cart = props.cart;
	const total = cart.reduce((total, prd) => total + prd.price * prd.quantity, 0);

	let shipping = 0;
	if (total > 250) shipping = 0;
	else if (total > 150) shipping = 19.99;
	else if (total > 0) shipping = 9.99;

	let tax = total / 10;

	function getRoundPrice(price) {
		const precision = price.toFixed(2);
		return Number(precision);
	}

	return (
		<div className="cart">
			<h3>Order Summary</h3>
			<p>Items ordered:{cart.length}</p>
			<div className="cart-total">
				<p>
					<small> Items price:</small> <small> $ {getRoundPrice(total)}</small>
				</p>
				<p>
					<small> Shipping:</small> <small> $ {shipping}</small>
				</p>
				<p>
					<small> Total before tax:</small>
					<small> $ {getRoundPrice(total + shipping)}</small>
				</p>
				<p>
					<small> Estimated Tax:</small> <small> ${getRoundPrice(tax)}</small>
				</p>
				<h3>
					<small> Order Total:</small>
					<small> ${getRoundPrice(total + shipping + tax)}</small>
				</h3>
				{props.children}
			</div>
		</div>
	);
};

export default Cart;

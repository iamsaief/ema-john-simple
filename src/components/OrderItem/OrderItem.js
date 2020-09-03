import React from "react";
import "./orderItem.css";

const OrderItem = (props) => {
	console.log(props);
	const {name, quantity, img, key, price} = props.product;
	return (
		<div className="product order-item">
			<div className="product-img">
				<img src={img} alt="" />
			</div>
			<div className="product-info">
				<h3>{name}</h3>
				<p>
					Quantity : {quantity}, Price: ${price}
				</p>
				<button onClick={() => props.handleRemoveProduct(key)}>Remove Item</button>
			</div>
		</div>
	);
};

export default OrderItem;

import React from "react";
import {useEffect} from "react";
import {useState} from "react";
import {getDatabaseCart, removeFromDatabaseCart, processOrder} from "../../utilities/databaseManager";
import fakeData from "../../fakeData";
import OrderItem from "../OrderItem/OrderItem";
import Cart from "../Cart/Cart";
import happyImage from "../../images/giphy.gif";

const OrderReview = () => {
	const [cart, setCart] = useState([]);
	const [orderPlaced, setOrderPlaced] = useState(false);

	useEffect(() => {
		// cart
		const savedCart = getDatabaseCart();
		const productKeys = Object.keys(savedCart);

		const cartProducts = productKeys.map((key) => {
			const product = fakeData.find((pd) => pd.key === key);
			product.quantity = savedCart[key];
			return product;
		});
		setCart(cartProducts);
	}, []);

	const handleRemoveProduct = (productKey) => {
		console.log("removed", productKey);
		const newCart = cart.filter((pd) => pd.key !== productKey);
		setCart(newCart);
		removeFromDatabaseCart(productKey);
	};

	const handlePlaceOrder = () => {
		console.log("order placed");
		setCart([]);
		if (cart.length) {
			setOrderPlaced(true);
		}
		processOrder();
		console.log(cart.length);
	};

	let orderPlacedMsg;
	if (orderPlaced) {
		orderPlacedMsg = (
			<div style={{textAlign: "center"}}>
				<img src={happyImage} alt="" />
			</div>
		);
	}

	const emptyCartMsg = (
		<div style={{textAlign: "center"}}>
			<h2 style={{padding: "20px 0"}}>No items on the cart</h2>
			<img src="https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif" alt="" />
		</div>
	);

	return (
		<div className="shop-container">
			<div className="product-container">
				{!cart.length && !orderPlaced && emptyCartMsg}
				{cart.map((pd) => (
					<OrderItem key={pd.key} product={pd} handleRemoveProduct={handleRemoveProduct}></OrderItem>
				))}
				{orderPlacedMsg}
			</div>
			<div className="cart-container">
				<Cart cart={cart}>
					<button onClick={handlePlaceOrder}> Place Order</button>
				</Cart>
			</div>
		</div>
	);
};

export default OrderReview;

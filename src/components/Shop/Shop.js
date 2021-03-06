import React, {useState} from "react";
import fakeData from "../../fakeData";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {addToDatabaseCart, getDatabaseCart} from "../../utilities/databaseManager";
import {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartArrowDown} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Shop = () => {
	const first10 = fakeData.slice(0, 10);
	const [products, setproducts] = useState(first10);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const savedCart = getDatabaseCart();
		const productKeys = Object.keys(savedCart);
		const prevCart = productKeys.map((existingKey) => {
			const product = fakeData.find((pd) => pd.key === existingKey);
			product.quantity = savedCart[existingKey];

			return product;
		});
		setCart(prevCart);
	}, []);

	const handleAddProduct = (product) => {
		console.log("product added", product);
		const toBeAddedKey = product.key;
		const sameProduct = cart.find((pd) => pd.key === toBeAddedKey);

		let count = 1;
		let newCart;
		if (sameProduct) {
			count = sameProduct.quantity + 1;
			sameProduct.quantity = count;
			const restProducts = cart.filter((pd) => pd.key !== toBeAddedKey);
			newCart = [...restProducts, sameProduct];
		} else {
			product.quantity = 1;
			newCart = [...cart, product];
		}

		setCart(newCart);
		addToDatabaseCart(product.key, count);
	};
	return (
		<div className="shop-container">
			<div className="product-container">
				{products.map((item) => (
					<Product
						product={item}
						key={item.key}
						handleAddProduct={handleAddProduct}
						showAddToCart={true}
					></Product>
				))}
			</div>

			<div className="cart-container">
				<Cart cart={cart}>
					<Link to="/review">
						<button>
							<FontAwesomeIcon icon={faCartArrowDown} /> Order Review
						</button>
					</Link>
				</Cart>
			</div>
		</div>
	);
};

export default Shop;

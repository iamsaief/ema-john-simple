import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
	// console.log(props);
	const {
		name,
		img,
		seller,
		price,
		stock,
		star,
		features,
		url,
	} = props.product;
	return (
		<div className='product'>
			<div className='product-img'>
				<img src={img} alt='' />
			</div>
			<div className='product-info'>
				<h4>
					<a href={url} target='_blank'>
						{name}
					</a>
				</h4>
				<p>
					<small>By: {seller}</small>
				</p>
				<div className='product-info-meta'>
					<div>
						<p>Price : ${price}</p>
						<p>
							<small>
								only {stock} left in stock - order soon
							</small>
						</p>
						<button
							onClick={() =>
								props.handleAddProduct(props.product)
							}>
							<FontAwesomeIcon icon={faShoppingCart} />
							&nbsp; Add to cart
						</button>
					</div>
					<div>
						<p>
							<small>Ratings: {star}</small> <br /> <br />
							<strong>Features: </strong>
						</p>
						{features.map((ft) => (
							<p className='features' key={Math.random()}>
								<small>
									{ft.description} : {ft.value}
								</small>
							</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;

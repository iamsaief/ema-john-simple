import React from "react";
import {useParams} from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const ProductDetail = () => {
	const {productKey} = useParams();
	const product = fakeData.find((pd) => pd.key === productKey);
	console.log(product);
	return (
		<div className="shop-container">
			{/* <h3>Product Details</h3> */}
			<div className="product-container">
				<Product showAddToCart={false} product={product}></Product>
			</div>
		</div>
	);
};

export default ProductDetail;

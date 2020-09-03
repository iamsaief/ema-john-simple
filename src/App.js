import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import OrderReview from "./components/OrderReview/OrderReview";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import ProductDetail from "./components/ProductDetail/ProductDetail";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<Router>
				<Switch>
					<Route path="/shop">
						<Shop></Shop>
					</Route>
					<Route path="/review">
						<OrderReview></OrderReview>
					</Route>
					<Route path="/inventory">
						<Inventory></Inventory>
					</Route>
					<Route path="/product/:productKey">
						<ProductDetail></ProductDetail>
					</Route>
					<Route path="*">
						<NotFound></NotFound>
					</Route>
				</Switch>
			</Router>
			<Footer></Footer>
		</div>
	);
}

export default App;

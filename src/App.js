import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className='App'>
			<Header></Header>
			<Shop></Shop>
			<Footer></Footer>
		</div>
	);
}

export default App;

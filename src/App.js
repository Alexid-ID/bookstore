import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Search from "./Component/Search";
import Error from "./Component/Error";
import List from "./Component/List";

const App = () => {
	return (
		<>
			<List />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search" element={<Search />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<Error/>} />
			</Routes>
		</>
	);
};

export default App;

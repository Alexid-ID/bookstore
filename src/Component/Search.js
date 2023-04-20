import React, { useState } from "react";
import "../Css/SearchStyle.css";
import library from "../Images/library.png";
import Card from "./SearchComponent/Card";
import axios from "axios";

const Search = () => {
	const [search, setSearch] = useState("");
	const [bookData, setData] = useState([]);
	const searchBook = () => {
		axios
			.get(
				"https://www.googleapis.com/books/v1/volumes?q=" +
					search +
					"&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU" +
					"&maxResults=40"
			)
			.then((res) => setData(res.data.items))
			.catch((err) => console.log(err));
	};
	
	const searchOnEnter = (evt) => {
		if (evt.key === "Enter") {
			searchBook();
		}
	}

	return (
		<>
			<div className="search__page">
				<div className="search__container">
					<div className="search">
						<input
							type="text"
							placeholder="Enter your book name"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							onKeyPress={searchOnEnter}
						/>
						<button onClick={searchBook}>Search</button>
					</div>
					<img src={library} alt="library" className="library" />
				</div>
				<div class="container overflow-hidden search__result">
					<div class="row gy-5">{<Card book={bookData} />}</div>
				</div>
			</div>
		</>
	);
};

export default Search;

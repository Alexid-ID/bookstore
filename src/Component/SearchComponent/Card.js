import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ book }) => {
	const [show, setShow] = useState(false);
	const [bookItem, setItem] = useState();
	console.log(book);

	return (
		<>
			{book.map((item) => {
				let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
				let publishedYear = new Date(item.volumeInfo.publishedDate).getFullYear();
				if(!thumbnail) {
					thumbnail = "https://via.placeholder.com/150";
				}
				return (
					<>
						<div class="col-6 col-sm-4 col-lg-2">
							<div className="book__card">
								<div className="book__image">
									<img src={thumbnail} alt="" width={200} height={200} />
								</div>
								<div className="book__content">
									<h3 className="book__title">{item.volumeInfo.title}</h3>
									<p className="book__author">Author: {item.volumeInfo.authors}</p>
									<p className="book__date">Publised year: {publishedYear}</p>
								</div>
								<button
									className="detailBtn"
									onClick={() => {
										setShow(true);
										setItem(item);
									}}
								>
									<p>Details</p>
								</button>
							</div>
							<Modal show={show} item={bookItem} onClose={() => setShow(false)} />
						</div>
					</>
				);
			})}
		</>
	);
};

export default Card;

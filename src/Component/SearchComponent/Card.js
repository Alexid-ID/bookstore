import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ book }) => {
	const [show, setShow] = useState(false);
	const [bookItem, setItem] = useState();
	// console.log(book);

	return (
		<>
			{book.map((item) => {
				let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
				let publishedYear = new Date(item.volumeInfo.publishedDate).getFullYear();
				if (thumbnail) {
					return (
						<>
							<div class="col-6 col-sm-4 col-lg-2">
								<div
									className="book__card p-2 pb-3"
									onClick={() => {
										setShow(true);
										setItem(item);
									}}
								>
									<div className="book__image">
										<img src={thumbnail} alt="" width={200} height={200} />
									</div>
									<div className="book__content">
										<div className="limit--length">
											<h3 className="book__title">{item.volumeInfo.title}</h3>
										</div>
										<div className="limit--length">
											<p className="book__author">Author: {item.volumeInfo.authors}</p>
										</div>
										<p className="book__date">Publised year: {publishedYear}</p>
									</div>
									<button className="detailBtn">
										<p>Details</p>
									</button>
								</div>

								<Modal show={show} item={bookItem} onClose={() => setShow(false)} />
							</div>
						</>
					);
				}
			})}
		</>
	);
};

export default Card;

import React from "react";
import bg from "../Images/book_explore.jpeg";

const Home=() => {
return (
	<>
		<div
			className="p-5 text-center bg-image"
			style={{
				position: "relative",
				top: "0",
				left: "0",
				width: "100%",
				height: "100vh",
				zIndex: "-1",
				backgroundImage: `url(${bg})`,
			}}
		>
			<div className="mask">
				<div className="d-flex justify-content-center align-items-center h-100">
					<div className="text-white">
						<h1 className="mb-3" style={{ fontWeight: "600", textShadow: "2px 2px 4px #000000" }}>
							Welcom to Book Finder
						</h1>
						<h4 className="mb-3" style={{ fontWeight: "400", textShadow: "2px 2px 4px #000000" }}>
							We use Google API to find the book you want!
						</h4>
					</div>
				</div>
			</div>
		</div>
	</>
);
}

export default Home;
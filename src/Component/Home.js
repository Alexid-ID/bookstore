import React from "react";
import bg from "../Images/book_explore.jpeg";
import { NavLink } from "react-router-dom";

const Home = () => {
	return (
		<>
			<div className="container-fluid">
				<div
					className="row"
					style={{
						height: "max-content",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "calc(100%)",
					}}
				>
					<div className="col-12 col-md-6 text-start order-md-0 order-1 py-3">
						<h1 className="p-0 m-0">
							Find the <strong>book </strong>
						</h1>
						<br />
						<h2 className="p-0 m-0">You're looking for easier to read.</h2>
						<p className="pt-5 pb-3">
							A global knowledge platform and marketplace for educators! Delivering engagin learning to
							billions.
						</p>
						<button className="btn btn-primary">
							<NavLink to={"/search"}>
								<p className="text-white p-0 m-0">Get started</p>
							</NavLink>
						</button>
						<button type="button" class="btn btn-outline-dark ms-3">
							<NavLink to={"/about"}>
								<p className="text-dark p-0 m-0">About us</p>
							</NavLink>
						</button>
					</div>
					<div className="col-12 col-md-6 text-start">
						<img src={bg} alt="bg" className="img-fluid" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;

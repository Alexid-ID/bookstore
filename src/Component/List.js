import React from "react";
import logo from "../Images/blue_full.png";
import '../Css/ListStyle.css';
import { NavLink } from "react-router-dom";

const List = () => {
	return (
		<>
			<header>
				<div className="container-fluid container-flex">
					<div className="logoContainer">
						<img src={logo} alt="logo" className="logo" />
					</div>
					<nav>
						<div className="list">
							<NavLink to={"/"} className="listItem" activeClassName="active">
								Home
							</NavLink>
							<NavLink to={"/search"} className="listItem" activeClassName="active">
								Search
							</NavLink>
							<NavLink to={"/about"} className="listItem" activeClassName="active">
								About
							</NavLink>
						</div>
					</nav>
				</div>
			</header>
		</>
	);
};

export default List;

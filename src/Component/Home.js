import React from "react";
import "../Css/Home.css";
import { NavLink } from "react-router-dom";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";

const HomePage = () => {
	return (
		<>
			<div className="container intro">
				<div className="row gy-5">
					<div className="col-12 col-md-6 d-flex flex-column justify-content-center intro-content">
						<p>Find the best book for you</p>
						<h1>
							Find the <strong style={{ color: "rgb(0, 151, 254)" }}>book</strong>
						</h1>
						<h1>
							you are looking
							<br />
							for <span style={{ color: "red" }}>easier</span> to read.
						</h1>
						<p>
							It's new easier than ever to search for popular books worldwide. Just open Book Finder and
							you're ready to read the book.
						</p>
						<div className="btns--container d-flex">
							<button className="btn btn-primary text-white">
								<NavLink to={"/search"} activeClassName="active" style={{ color: "#fff" }}>
									Get Started
								</NavLink>
							</button>
							<button className="ms-3 btn btn-secondary">
								<NavLink to={"/about"} activeClassName="active">
									About
								</NavLink>
							</button>
						</div>
					</div>
					<div className="col-12 col-md-6">
						<img className="w-md-50" src={require("../Images/Knowledge.gif")} alt="Logo" />
					</div>
				</div>
			</div>
			<div className="container ad--container">
				<div className="row gy-5">
					<div className="ad--holder col-4">
						<img src={require("../Images/tax-free.png")} alt="free" />
						<div className="ad--content">
							<h1>Free</h1>
							<p>Get your first book for free</p>
						</div>
					</div>
					<div className="ad--holder col-4">
						<img src={require("../Images/easy.png")} />
						<div className="ad--content">
							<h1>Easy</h1>
							<p>Find the book you are looking for easier</p>
						</div>
					</div>
					<div className="ad--holder col-4">
						<img src={require("../Images/fast-time.png")} />
						<div className="ad--content">
							<h1>Faster</h1>
							<p>Get your book faster than ever</p>
						</div>
					</div>
				</div>
			</div>

			<div className="container genres--container my-5">
				<div className="row gy-5">
					<div className="col-12">
						<h1 className="">Genres</h1>
					</div>
				</div>
				<div className="row  g-4">
					<div className="col-6 col-md-4 col-lg-3">
						<div className="genres--content p-0">
							<img src={require("../Images/romance.png")} />
							<p>ROMANCE</p>
						</div>
					</div>
					<div className="col-6 col-md-4 col-lg-3">
						<div className="genres--content p-0">
							<img src={require("../Images/adventure.jpg")} />
							<p>ACTION & ADVENTURE</p>
						</div>
					</div>
					<div className="col-6 col-md-4 col-lg-3">
						<div className="genres--content p-0">
							<img src={require("../Images/mystery.jpg")} />
							<p>MYSTERY & THRILLER</p>
						</div>
					</div>
					<div className="col-6 col-md-4 col-lg-3">
						<div className="genres--content p-0">
							<img src={require("../Images/history.jpg")} />
							<p>BIOGRAPHIES & HISTORY</p>
						</div>
					</div>
					<div className="col-6 col-md-4 col-lg-3">
						<div className="genres--content p-0">
							<img src={require("../Images/children.jpg")} />
							<p>CHILDREN’S</p>
						</div>
					</div>
					<div className="col-6 col-md-4 col-lg-3">
						<div className="genres--content p-0">
							<img src={require("../Images/young_adults.jpg")} />
							<p>YOUNG ADULT</p>
						</div>
					</div>
					<div className="col-6 col-md-4 col-lg-3">
						<div className="genres--content p-0">
							<img src={require("../Images/fantasy.jpg")} />
							<p>FANTASY</p>
						</div>
					</div>
					<div className="col-6 col-md-4 col-lg-3">
						<div className="genres--content p-0">
							<img src={require("../Images/historical_fiction.jpg")} />
							<p>HISTORICAL FICTION</p>
						</div>
					</div>
					<div className="col-6 col-md-4 col-lg-3">
						<div className="genres--content p-0">
							<img src={require("../Images/horror.jpg")} />
							<p>HORROR</p>
						</div>
					</div>
					<div className="col-6 col-md-4 col-lg-3">
						<div className="genres--content p-0">
							<img src={require("../Images/literary_fiction.jpg")} />
							<p>LITERARY FICTION</p>
						</div>
					</div>
					<div className="col-6 col-md-4 col-lg-3">
						<div className="genres--content p-0">
							<img src={require("../Images/non_fiction.jpg")} />
							<p>NON-FICTION</p>
						</div>
					</div>
					<div className="col-6 col-md-4 col-lg-3">
						<div className="genres--content p-0">
							<img src={require("../Images/science.jpg")} />
							<p>SCIENCE FICTION</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluids banner--container">
				<div className="row">
					<div className="col-12 banner--content d-flex flex-column align-items-center justify-content-center">
						<h1 className="text-center">Book Finder</h1>
						<p>It's Time To Get Knowledge</p>
						<button className="btn btn-primary">
							<NavLink to={"/search"} activeClassName="active" style={{ color: "#fff" }}>
								Search Now
							</NavLink>
						</button>
					</div>
				</div>
			</div>
			<div className="container-fluids">
				<MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
					<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
						<div className="me-5 d-none d-lg-block">
							<span>Get connected with us on social networks:</span>
						</div>

						<div>
							<a href="" className="me-4 text-reset">
								<MDBIcon fab icon="facebook-f" />
							</a>
							<a href="" className="me-4 text-reset">
								<MDBIcon fab icon="twitter" />
							</a>
							<a href="" className="me-4 text-reset">
								<MDBIcon fab icon="google" />
							</a>
							<a href="" className="me-4 text-reset">
								<MDBIcon fab icon="instagram" />
							</a>
							<a href="" className="me-4 text-reset">
								<MDBIcon fab icon="linkedin" />
							</a>
							<a href="" className="me-4 text-reset">
								<MDBIcon fab icon="github" />
							</a>
						</div>
					</section>

					<section className="">
						<MDBContainer className="text-center text-md-start mt-5">
							<MDBRow className="mt-3">
								<MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
									<h6 className="text-uppercase fw-bold mb-4">
										<MDBIcon icon="gem" className="me-3" />
										Company name
									</h6>
									<p>
										Here you can use rows and columns to organize your footer content. Lorem ipsum
										dolor sit amet, consectetur adipisicing elit.
									</p>
								</MDBCol>

								<MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
									<h6 className="text-uppercase fw-bold mb-4">Products</h6>
									<p>
										<a href="#!" className="text-reset">
											Angular
										</a>
									</p>
									<p>
										<a href="#!" className="text-reset">
											React
										</a>
									</p>
									<p>
										<a href="#!" className="text-reset">
											Vue
										</a>
									</p>
									<p>
										<a href="#!" className="text-reset">
											Laravel
										</a>
									</p>
								</MDBCol>

								<MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
									<h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
									<p>
										<a href="#!" className="text-reset">
											Pricing
										</a>
									</p>
									<p>
										<a href="#!" className="text-reset">
											Settings
										</a>
									</p>
									<p>
										<a href="#!" className="text-reset">
											Orders
										</a>
									</p>
									<p>
										<a href="#!" className="text-reset">
											Help
										</a>
									</p>
								</MDBCol>

								<MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
									<h6 className="text-uppercase fw-bold mb-4">Contact</h6>
									<p>
										<MDBIcon icon="home" className="me-2" />
										New York, NY 10012, US
									</p>
									<p>
										<MDBIcon icon="envelope" className="me-3" />
										info@example.com
									</p>
									<p>
										<MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
									</p>
									<p>
										<MDBIcon icon="print" className="me-3" /> + 01 234 567 89
									</p>
								</MDBCol>
							</MDBRow>
						</MDBContainer>
					</section>

					<div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
						© 2021 Copyright:
						<a className="text-reset fw-bold" href="https://mdbootstrap.com/">
							MDBootstrap.com
						</a>
					</div>
				</MDBFooter>
			</div>
		</>
	);
};

export default HomePage;

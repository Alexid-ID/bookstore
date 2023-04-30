import React from "react";
import "../Css/About.css";
import { MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";

const About = () => {
	return (
		<>
			<div className="container intro">
				<div className="row gy-5">
					<div className="col-12 col-md-6 d-flex flex-column justify-content-center intro-content">
						<MDBListGroup light style={{ minWidth: "22rem" }}>
							<MDBListGroupItem className="d-flex justify-content-between align-items-start">
								<div className="ms-2 me-auto">
									<div className="fw-bold">
										“The more that you read, the more things you will know. The more that you learn,
										the more places you'll go.”
									</div>
									―Dr. Seuss, I Can Read With My Eyes Shut!
								</div>
							</MDBListGroupItem>
							<MDBListGroupItem className="d-flex justify-content-between align-items-start">
								<div className="ms-2 me-auto">
									<div className="fw-bold">“So many books, so little time.”</div>― Frank Zappa
								</div>
							</MDBListGroupItem>
							<MDBListGroupItem className="d-flex justify-content-between align-items-start">
								<div className="ms-2 me-auto">
									<div className="fw-bold">
										“A reader lives a thousand lives before he dies . . . The man who never reads
										lives only one.”
									</div>
									- George R.R. Martin
								</div>
							</MDBListGroupItem>
						</MDBListGroup>
					</div>
					<div className="col-12 col-md-6">
						<img className="w-md-50" src={require("../Images/man_reading.gif")} alt="Logo" />
					</div>
				</div>
			</div>

			<div className="container"></div>

			<div className="header">
				<h4>About us</h4>
				<p>Our website using Google Book Api to find your book. </p>
			</div>

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
									Here you can use rows and columns to organize your footer content. Lorem ipsum dolor
									sit amet, consectetur adipisicing elit.
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
		</>
	);
};

export default About;

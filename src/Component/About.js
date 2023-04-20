import React from "react";
import "../Css/About.css";
import { MDBBadge, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";

const About = () => {
	return (
		<>
			<div className="header">
				<h1>About us</h1>
				<p>Our website using Google Book Api to find your book. </p>
				
			</div>

			<div className="container">
				<MDBListGroup light style={{ minWidth: "22rem" }}>
					<MDBListGroupItem className="d-flex justify-content-between align-items-start">
						<div className="ms-2 me-auto">
							<div className="fw-bold">
								“The more that you read, the more things you will know. The more that you learn, the
								more places you’ll go.”
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
								“A reader lives a thousand lives before he dies . . . The man who never reads lives only
								one.”
							</div>
							- George R.R. Martin
						</div>
					</MDBListGroupItem>
				</MDBListGroup>
			</div>
		</>
	);
};

export default About;

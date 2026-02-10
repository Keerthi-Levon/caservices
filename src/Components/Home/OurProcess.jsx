import React from "react";
import { LuUserCheck, LuScreenShare } from "react-icons/lu";
import { VscNewFolder } from "react-icons/vsc";
import { FaUniversity } from "react-icons/fa";
import { TbFileCertificate } from "react-icons/tb";
import { AiOutlineFileDone } from "react-icons/ai";

const OurProcess = () => {
	return (
		<div className="business-iso-sections our-process-section">
			<div className="container">
				{/* Heading */}
				<div className="our-process text-center mb-5">
					<p>Our Process</p>

					<h1>Company Registration Process We Follow To Setup New Business</h1>
					<p>
						It’s easier than you think. We’ve simplified the entire process into
						clear steps to make your company registration in Bangalore smooth
						and stress-free:
					</p>
				</div>

				{/* Cards */}
				<div className="row g-4">
					<div className="col-lg-4 col-md-6">
						<div className="our-process-cards">
							<span><LuUserCheck /></span>
							<h2>Book Free Consultation</h2>
							<p>Tell us what you have in mind. We’ll guide you to the right structure.</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="our-process-cards">
							<span><VscNewFolder /></span>
							<h2>Document Verification</h2>
							<p>You send us your basic KYC docs. We’ll handle the rest.</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="our-process-cards">
							<span><LuScreenShare /></span>
							<h2>Name Approval</h2>
							<p>We file for name reservation with the MCA.</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="our-process-cards">
							<span><AiOutlineFileDone /></span>
							<h2>Incorporation Filing</h2>
							<p>MOA, AOA, PAN, TAN, GST — we do it all.</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="our-process-cards">
							<span><TbFileCertificate /></span>
							<h2>Registration Certificate</h2>
							<p>You get your company registered, legally and officially.</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="our-process-cards">
							<span><FaUniversity /></span>
							<h2>Post-Incorporation Compliance</h2>
							<p>We help with bank account setup and ongoing filings.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurProcess;

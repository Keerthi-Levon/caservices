import React from 'react'
const services = [
	{
		title: "Post-Incorporation Services",
		items: [
			"GST registration",
			"MSME/Udyam registration",
			"Trademark filing",
			"Opening a current account",
			"Start-up India registration",
			"Employment contracts & policies",
		],
	},
	{
		title: "Ongoing Compliance",
		items: [
			"ROC filings",
			"Board meeting minutes",
			"Financial statement preparation",
			"Director KYC",
			"TDS, GST, Income Tax",
		],
	},
	{
		title: "Advisory & Support",
		items: [
			"Legal consulting",
			"Fundraising compliance",
			"Internal audits",
			"Labor law advisory",
			"Contract drafting and vetting",
		],
	},
];
const PostRegistration = () => {
	return (
		<div className="our-process-section">
			<div className="container">
				<div className='row post-registration-row'>
					<div className='col-lg-6'>
						<h1>We Offer Services Beyond Company Registration in Bangalore!
						</h1>
					</div>
					<div className='col-lg-6'>
						<h6>We don’t just help with company registration in Bangalore – we stay with you long after your company is up and running as your compliance partner. Because setting up is only step one, staying compliant is what keeps you going.</h6>
					</div>
				</div>
				<h1 className='title-post-register'>Here’s how we support you post-registration
				</h1>
				<div className="row">
					{services.map((service, index) => (
						<div className="col-lg-4 mb-4" key={index}>
							<div className="service-card">
								<h4 className="service-title">{service.title}</h4>
								<ul className="service-list">
									{service.items.map((item, idx) => (
										<li key={idx}>{item}</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>

	)
}

export default PostRegistration

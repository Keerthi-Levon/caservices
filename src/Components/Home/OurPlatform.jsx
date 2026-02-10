import { ReactComponent as SupportIcon } from "../../Assets/our-platform.svg";

const OurPlatform = () => {
	return (
		<section className="ourplatform-section mt-5">
			<div className="container">
				<div className="text-content">
					<h2 className="text-content-h2">
						How <span>our platform</span> works
					</h2>
					<p className="text-content-para">
						Our platform simplifies the company registration and compliance process. From consultation to final approval, we handle everything efficiently so you can focus on growing your business. Follow these simple steps to get started.
					</p>
				</div>
				<div className='row mt-0 align-items-center p-4'>
					<div className="col-lg-7">
						<div className="step-item d-flex mb-4">
							<div className="step-icon">
								<div className="step-number">1</div>
							</div>
							<div>
								<h4>Consultation & Assessment</h4>
								<p>We understand your business goals, structure, and requirements to recommend the most suitable registration and compliance solution.</p>
							</div>
						</div>

						<div className="step-item d-flex mb-4">
							<div className="step-icon">
								<div className="step-number">2</div>
							</div>
							<div>
								<h4>Documentation & Filing</h4>
								<p>Our experts prepare, verify, and file all required documents with the relevant authorities, ensuring accuracy and legal compliance.</p>
							</div>
						</div>

						<div className="step-item d-flex">
							<div className="step-icon no-line">
								<div className="step-number">3</div>
							</div>
							<div>
								<h4>Approval & Ongoing Support</h4>
								<p>Once your company is registered, we provide the incorporation certificate and continue to support you with post-registration compliance and advisory services.</p>
							</div>
						</div>
					</div>

					<div className='col-lg-5'>
						<SupportIcon className="ourplatform-image" />
					</div>
				</div>
			</div>
		</section>

	)
}

export default OurPlatform

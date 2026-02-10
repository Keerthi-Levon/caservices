import React from 'react'
import { MdOutlinePhoneInTalk } from 'react-icons/md'

const ContactLink = () => {
	return (
		<div className="contactLink-main">
			<div className="container">
				<div className="contact-div text-center mb-5">

					<h1>Need Help To Choose Right Business Structure?
					</h1>
					<p>
						Book a call with our Business Registration Consultant Today. With Consultation, you will identify the right business type to choose as per the business goals & vision.
					</p>
					<button className='call-button mt-4'><MdOutlinePhoneInTalk />{" "}CALL US NOW</button>
				</div>
			</div>
		</div>

	)
}

export default ContactLink

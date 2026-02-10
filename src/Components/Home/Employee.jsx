import Slider from "react-slick";
import { ReactComponent as SupportIcon } from "../../Assets/employee.svg";
import { ReactComponent as SupportIcon1 } from "../../Assets/employee1.svg";

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Employee = () => {

	const settings = {
		infinite: true,
		speed: 600,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		arrows: false,
		dots: true,
		mobileFirst: true,

		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	};

	const team = [
		{
			img: <SupportIcon className="employee-image" />,
			name: "Christ Matthew",
			role: "Chief Technology Officer",
		},
		{
			img: <SupportIcon1 className="employee-image" />,
			name: "Benjamin Foster",
			role: "CEO Portal",
		},
		{
			img: <SupportIcon className="employee-image" />,
			name: "David Johnson",
			role: "Product Manager",
		},
		{
			img: <SupportIcon1 className="employee-image" />,
			name: "Emily Carter",
			role: "Lead Designer",
		},
	];

	return (
		<section className="employee-section mt-5">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="text-content-employee">
							<h2 className="text-employee-h2">
								Meet the <span>Minds Behind</span> Our Solutions
							</h2>
							<p className="text-employee-para">
								Our certified professionals bring together technology, creativity, and experience to deliver exceptional software solutions. With a passion for innovation and a commitment to excellence,  business challenges. Get to know the talented minds behind our success and see how their expertise drives results for our clients.
							</p>
						</div>
					</div>

					<div className="col-lg-8">
						<Slider {...settings}>
							{team.map((member, index) => (
								<div key={index} className="team-card">
									<div className="team-image-wrapper">
										{member.img}
										<div className="team-overlay">
											<h3 className="team-name">{member.name}</h3>
											<p className="team-role">{member.role}</p>

											<div className="team-icons">
												<FaFacebookF />
												<FaInstagram />
												<FaTwitter />
												<FaLinkedinIn />
											</div>
										</div>
									</div>

								</div>
							))}
						</Slider>
					</div>

				</div>
			</div>
		</section>
	);
};

export default Employee;

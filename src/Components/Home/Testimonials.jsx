import { ReactComponent as SupportIcon } from "../../Assets/testi.svg";
import { ReactComponent as SupportIcon1 } from "../../Assets/testi1.svg";
import { ReactComponent as SupportIcon2 } from "../../Assets/testi2.svg";
import { ReactComponent as SupportIcon3 } from "../../Assets/testi3.svg";

const Testimonials = () => {
  return (
    <section className="ourplatform-section mt-5">
      <div className="container">
        <div className="text-content">
          <h2 className="text-content-h2">
            <span>Client Testimonials</span> <br /> Hear directly from Our
            Satisfied Partners
          </h2>
          <p className="text-content-para">
            Hear from our clients about their experience with our expert-led
            company registration and compliance services.
          </p>
        </div>
        <div className="row testimonial-row">
          <div className="col-lg-6">
            <div className="testimonial-section">
              <SupportIcon className="testi-image" />
              <div className="testimonial-content">
                <p>
                  “The entire company registration process was smooth and
                  transparent. Their team guided us at every step and handled
                  all the paperwork flawlessly.”
                </p>
                <h6>- Linda A.</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="testimonial-section-right">
              <SupportIcon1 className="testi-image" />
              <div className="testimonial-content">
                <p>
                  “Highly professional service with clear communication. Our
                  private limited company was registered faster than expected.”
                </p>
                <h6>- Henry B.</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row testimonial-row">
          <div className="col-lg-6">
            <div className="testimonial-section">
              <SupportIcon2 className="testi-image" />
              <div className="testimonial-content">
                <p>
                  “Their legal and compliance expertise gave us complete peace
                  of mind. We continue to rely on them for all post-registration
                  filings.”
                </p>
                <h6>- Joshua T.</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="testimonial-section-right">
              <SupportIcon3 className="testi-image" />
              <div className="testimonial-content">
                <p>
                  “Excellent support and honest pricing. The team explained
                  everything clearly and made the process stress-free.”
                </p>
                <h6>- Samantha K.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

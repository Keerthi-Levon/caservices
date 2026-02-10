import "./footer.css";
import logo from "../../Assets/b2blogoo.png";

const Footer = () => {
  return (
    <div className="footer-bg-section">
      <footer className="footer mt-4">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-3 mb-4 mb-md-0">
              <img src={logo} alt="Icon" className="footer-icon" />
              <div className="socials-margin">
                <div className="newsletter">
                  <p className="newsletter-subheading">
                    Empowering your business with smart software solutions, anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4 mb-md-0">
              <h3 className="mb-3 footer-links-name">Support</h3>
              <ul>
                <li className="mb-2">
                  <a href="#">Home</a>
                </li>
                <li className="mb-2">
                  <a href="#">About Us</a>
                </li>
                <li className="mb-2">
                  <a href="#">Services</a>
                </li>
                <li className="mb-2">
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-4 mb-md-0">
              <h3 className="mb-3 footer-links-name">Services</h3>
              <ul>
                <li className="mb-2">
                  <a href="#">ROC filings</a>
                </li>
                <li className="mb-2">
                  <a href="#">Board meeting minutes</a>
                </li>
                <li className="mb-2">
                  <a href="#">Financial statement preparation</a>
                </li>
                <li className="mb-2">
                  <a href="#">Director KYC</a>
                </li>
                <li className="mb-2">
                  <a href="#">TDS, GST, Income Tax</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-4 mb-md-0">
              <h3 className="mb-3 footer-links-name">Legal</h3>
              <ul>
                <li className="mb-2">
                  <a href="#">Terms and Conditions</a>
                </li>
                <li className="mb-2">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="mb-2">
                  <a href="#">Cookie Notice</a>
                </li>
                <li className="mb-2">
                  <a href="#">Cookie Preferences</a>
                </li>
                <li className="mb-2">
                  <a href="#">Trust Center</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-disclaimer mt-3">
              <strong>© 2026 Blueledger. All Rights Reserved.</strong><br />
              Blueledger is a private, independent facilitation platform providing administrative assistance for business registration and compliance services. We are not a law firm, CA/CS firm, or a government authority. Content is for informational purposes only and does not constitute professional advice. Services are fee-based; government approvals and timelines are subject to the respective authorities.
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;

// import { Link } from "react-router-dom";
import isoImage from "../../Assets/iso-business.svg";
import { MdArrowForwardIos } from "react-icons/md";

const HomePageIndex = () => {
  return (
    <div className="business-iso-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-md-6 iso-business-right ps-3">
            <h2 className="mb-3">
              <span>
                Start New Business in Bangalore with Our Company Registration
                Services
              </span>
            </h2>

            <p className="mb-4">
              Thinking of starting your own company? Whether it's a startup,
              NGO, or partnership firm, the process can get overwhelming real
              quick. We simplify company registration in Bangalore by making the
              entire process smooth, transparent, and stress-free, with no
              confusion or last-minute surprises.
            </p>
            {/* <Link to="/contact"> */}
            <button className="view-reports-button mb-4">
              Get Started <MdArrowForwardIos />
            </button>
            {/* </Link>   */}
          </div>

          <div className="col-md-6 mb-4 mb-md-0">
            <div className="iso-image-wrapper">
              <img
                src={isoImage}
                alt="ISO Business"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageIndex;

import React, { useState } from "react";
import { ReactComponent as SupportIcon } from "../../Assets/our-story.svg";

const OurStory = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/.netlify/functions/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Form submitted successfully ✅");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }

    setLoading(false);
  };

  return (
    <section className="ourStory-section mt-5">
      <div className="container">
        <div className="ourstory-content">
          <h2 className="ourstory-content-h2">
            WHY <span>CHOOSE US</span>
          </h2>

          <div className="row mt-5 align-items-center">
            {/* Left Side Image */}
            <div className="col-lg-5 mb-4">
              <SupportIcon className="ourstory-image" />
            </div>

            {/* Right Side Content */}
            <div className="col-lg-7">
              <ul className="ourstory-list mb-4">
                <li>Affordable pricing with no hidden charges</li>
                <li>Expert CA, CS & legal professionals</li>
                <li>Fast & hassle-free company registration</li>
                <li>Dedicated manager for every client</li>
                <li>100% online & transparent process</li>
                <li>Strong post-registration compliance support</li>
              </ul>

              {/* ✅ Contact Form */}
              <form className="ourstory-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-12 mb-3">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-12 mb-3">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      className="form-control"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Submit"}
                    </button>
                  </div>
                </div>
              </form>
              {/* ✅ Contact Form End */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;

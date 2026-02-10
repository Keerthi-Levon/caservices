import React, { useState } from "react";

const RegisterCompany = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Input Change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Submit
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
        alert("✅ Message Sent Successfully");

        setFormData({
          name: "",
          email: "",
          mobile: "",
          address: "",
          message: "",
        });
      } else {
        alert(data.error || "❌ Failed to send message");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Server Error");
    }

    setLoading(false);
  };

  return (
    <div className="business-iso-sections">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-md-7 iso-business-rights ps-3">
            <h2 className="mb-3">
              <span>Why Should You Register Your Company in India?</span>
            </h2>

            <p className="mb-4">
              Because running a business without proper registration is like driving without a license.
            </p>

            <h1>A Registered Company Gives You -</h1>

            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>Legal recognition</li>
              <li>Tax benefits</li>
              <li>Better credibility</li>
              <li>Access to funding</li>
              <li>Limited liability protection</li>
            </ul>
          </div>

          {/* RIGHT FORM */}
          <div className="col-md-5">
            <form
              onSubmit={handleSubmit}
              className="p-4 shadow rounded bg-white"
            >
              <h4 className="mb-3">Request Service</h4>

              <input
                className="form-control mb-3"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                className="form-control mb-3"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                className="form-control mb-3"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />

              <input
                className="form-control mb-3"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
              />

              <textarea
                className="form-control mb-3"
                name="message"
                placeholder="Message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
              />

              <button
                className="btn btn-primary w-100"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RegisterCompany;

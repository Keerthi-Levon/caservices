const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  try {
    // Parse data from frontend
    const data = JSON.parse(event.body);

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send Mail
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "New Company Registration Request",
      html: `
        <h2>New Service Request</h2>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Mobile:</b> ${data.mobile}</p>
        <p><b>Address:</b> ${data.address || "-"}</p>
        <p><b>Message:</b> ${data.message || "-"}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Email sent successfully",
      }),
    };
  } catch (error) {
    console.error("Mail Error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message,
      }),
    };
  }
};

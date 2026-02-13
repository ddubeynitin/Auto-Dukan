 const nodemailer = require("nodemailer");

const sendOTP = async (req, res) => {
  const { email, otp } = req.body;

    const otpValue = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nitlox30@gmail.com",
      pass: "yoxixhpkgjrfzljr", // Your Google App Password
    },
  });

  const mailOptions = {
    from: "nitlox30@gmail.com",
    to: "iamjagannath24@gmail.com",
    subject: "Verify your account",
    text: `Your verification code is: ${otpValue}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log(error);
    else console.log("Email sent: " + info.response);
  });

    res.json({ otp: otpValue });
}

module.exports = { sendOTP };
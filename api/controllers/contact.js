import nodemailer from 'nodemailer';

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'smtp.hostinger.com', // e.g., 'Gmail', 'Yahoo', etc.
  port: 587,
  secure: false,
  auth: {
    user: 'contact@raindropcoding.com',
    pass: '', //HUSK Å SKRIVE PASSORD HER NÅR FERDIG
  },
});

// Controller to send email
const sendEmail = (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'dominikucher@hotmail.com', // The recipient's email address based on the selected option
    subject: `Contact Form Submission - ${subject}`,
    text: `This is a message sent from Contact form on RaindropCoding website.\nHit "reply" to reply to sender.\n\n${message}`,
    replyTo: `${name} <${email}>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    } else {
      console.log('Email sent: ' + info.response);
      res.json({ success: true, message: 'Email sent successfully' });
    }
  });
};

export { sendEmail };

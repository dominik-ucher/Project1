import nodemailer from 'nodemailer';

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  secure: true, 
  port: 465,
  auth: {
      user: 'contact@raindropcoding.com',
      pass: '',
  },
});

// Controller to send email
const sendEmail = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message; 

  const mailOptions = {
    from: 'contact@raindropcoding.com',
    to: 'dominik@raindropcoding.com', // The recipient's email address based on the selected option
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
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    }
  });
};

export { sendEmail };

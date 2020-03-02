import nodemailer from 'nodemailer'


var transporter = nodemailer.createTransport({
  service: 'Outlook365',
  auth: {
    user: 'tech@biscui.tech',
    pass: '^&x28B3V8.IwI,(s=FK)'
  }
});

export default async function (req, res) {
  const { email, message, name } = req.body
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+ /gm;
  const isEmailOkay = emailRegex.test(email)
  if (!isEmailOkay) {
    res.status(400).send('Your email is not an email.')
  }
  try {
    const mailOptions = {
      from: email,
      to: 'tech@biscui.tech',
      subject: `New message from your website`,
      text: `${message} \n Sent by: ${name}`
    };
    /*   console.log('email: ', email)
      console.log('message: ', message)
      console.log('name: ', name) */
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        throw new Error(error)
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    res.status(200).send('Message sent successfully.')
  }
  catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }


}
import nodemailer from 'nodemailer'
import { email as emailRegEx } from '../../lib/regEx'

var transporter = nodemailer.createTransport({
  service: 'Outlook365',
  auth: {
    user: 'tech@biscui.tech',
    pass: '^&x28B3V8.IwI,(s=FK)'
  }
});

export default async function (req, res) {
  const { email, message, name } = req.body
  const isEmailOkay = emailRegEx.test(email)
  if (!isEmailOkay) {
    return res.status(400).send('Your email is not an email.')
  }
  try {
    const mailOptions = {
      from: {
        address: 'tech@biscui.tech',
        name: name
      },
      sender: email,
      replyTo: email,
      to: 'tech@biscui.tech',
      subject: `New message from your website`,
      text: `${message}\n\n---------------------\nSent by: ${name}\n${email}`
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).send('Message sent successfully.')
  }
  catch (error) {
    console.log('ERROR', error)
    return res.status(400).send('Message not sent.')
  }
}

/*

, function (error, info) {
      if (error) {
        console.log(error);
        throw new Error(error)
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send('Message sent successfully.')
      }
    }

*/
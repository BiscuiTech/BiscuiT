import nodemailer from "nodemailer";
import { email as emailRegEx } from "../../lib/regEx";
import { ServerClient } from "postmark";
const postmarkClient = new ServerClient(process.env.POSTMARK_SERVER_API_TOKEN);

var transporter = nodemailer.createTransport({
  service: "Outlook365",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
  // host: "smtp.office365.com",
  // port: "587",
  // secureConnection: false,
  // tls: {
  // ciphers: "SSLv3",
  // },
});

const confirmationSubject = {
  fr: "J'ai reçu votre message!",
  en: "Got your message!",
};
const confirmationText = {
  fr: "J'ai bien reçu votre message, je vous répondrai aussitôt que possible.",
  en:
    "I have received your message and I'll reply to you as quickly as possible.",
};

export default async function (req, res) {
  const { email, message, firstName, lastName } = req.body;
  const isEmailOkay = emailRegEx.test(email);
  if (!isEmailOkay) {
    return res.status(400).send("Your email is not an email.");
  }
  try {
    const mailOptions = {
      from: `BiscuiTech <${process.env.EMAIL_USERNAME}>`,
      to: `BiscuiTech <${process.env.EMAIL_USERNAME}>`,
      subject: `New message from your website`,
      text: `${lastName}, ${firstName}\n${email}\n\n${message}`,
    };
    await transporter.sendMail(mailOptions);
    await transporter.sendMail({
      from: `BiscuiTech <${process.env.EMAIL_USERNAME}>`,
      to: email,
      subject: confirmationSubject[req.headers["content-language"]],
      text: confirmationText[req.headers["content-language"]],
    });
    /* await postmarkClient.sendEmail({
      From: `Website Contact Form <${process.env.EMAIL_USERNAME}>`,
      To: process.env.EMAIL_USERNAME,
      Subject: "New message from your website",
      TextBody: `${lastName}, ${firstName}\n${email}\n\n${message}`,
    }); */

    return res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    return res.status(400).send("Message not sent.");
  }
}

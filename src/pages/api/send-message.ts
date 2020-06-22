import nodemailer from "nodemailer";
import { email as emailRegEx } from "../../lib/regEx";
// import { ServerClient } from "postmark";
// const postmarkTransport = require("nodemailer-postmark-transport");
// const postmarkClient = new ServerClient(process.env.POSTMARK_SERVER_API_TOKEN);

var transporter = nodemailer.createTransport({
  service: "Outlook365",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});
console.log(process.env.EMAIL_USERNAME, process.env.EMAIL_PASSWORD);

/* const mailTransport = nodemailer.createTransport(
  postmarkTransport({
    auth: {
      apiKey: process.env.POSTMARK_SERVER_API_TOKEN,
    },
  })
);
 */
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
  /* try {
    await postmarkClient.sendEmail({
      From: email,
      To: "tech@biscui.tech",
      Subject: "New message from your website",
      TextBody: `${message}\n\n---------------------\nSent by: ${lastName}, ${firstName}\n${email}`,
    });
  } catch (error) {
    console.log("ERROR", error);
    return res.status(400).send("Message not sent.");
  } */
  try {
    const mailOptions = {
      from: "'BiscuiTech' <tech@biscui.tech>",
      to: "'BiscuiTech' <tech@biscui.tech>",
      subject: `New message from your website`,
      text: `${message}\n\n---------------------\nSent by: ${lastName}, ${firstName}\n${email}`,
    };
    await transporter.sendMail(mailOptions);
    await transporter.sendMail({
      from: "'BiscuiTech' <tech@biscui.tech>",
      to: email,
      subject: confirmationSubject[req.headers["content-language"]],
      text: confirmationText[req.headers["content-language"]],
    });
    return res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    return res.status(400).send("Message not sent.");
  }
}

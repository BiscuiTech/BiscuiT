import nodemailer from "nodemailer";
import { email as emailRegEx } from "../../lib/regEx";

var transporter = nodemailer.createTransport({
  service: "Outlook365",
  auth: {
    user: "tech@biscui.tech",
    pass: process.env.EMAIL_PASSWORD,
  },
});

const confirmationSubject = {
  fr: "Accusé de réception",
  en: "Acknowledgment of receipt",
};

const confirmationText = {
  fr: "J'ai bien reçu votre message, je vous répondrai aussitôt que possible.",
  en:
    "I have received your message and I'll reply to you as quicly as possible.",
};

export default async function (req, res) {
  const { email, message, name } = req.body;
  const isEmailOkay = emailRegEx.test(email);
  if (!isEmailOkay) {
    return res.status(400).send("Your email is not an email.");
  }
  try {
    const mailOptions = {
      from: {
        address: "tech@biscui.tech",
        name: name,
      },
      sender: email,
      replyTo: email,
      to: "tech@biscui.tech",
      subject: `New message from your website`,
      text: `${message}\n\n---------------------\nSent by: ${name}\n${email}`,
    };
    await transporter.sendMail(mailOptions);
    transporter.sendMail({
      from: {
        address: "tech@biscui.tech",
        name: "BiscuiTech",
      },
      sender: "tech@biscui.tech",
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

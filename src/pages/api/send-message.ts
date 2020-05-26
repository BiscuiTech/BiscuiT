import nodemailer from "nodemailer";
import { email as emailRegEx } from "../../lib/regEx";

var transporter = nodemailer.createTransport({
  service: "Outlook365",
  auth: {
    user: process.env.EMAIL_USERNAME || "tech@biscui.tech",
    pass: process.env.EMAIL_PASSWORD,
  },
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
      from: {
        address: "tech@biscui.tech",
        name: firstName,
      },
      sender: email,
      replyTo: email,
      to: "tech@biscui.tech",
      subject: `New message from your website`,
      text: `${message}\n\n---------------------\nSent by: ${lastName}, ${firstName}\n${email}`,
    };
    await transporter.sendMail(mailOptions);
    await transporter.sendMail({
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

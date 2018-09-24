let router = require('express').Router();
let postmark = require("postmark");

// Send an email:
let client = new postmark.Client(process.env.POSTMARK_SERVERKEY);


router.post('/', function (req, res) {
  client.sendEmail({
    "From": req.body.email,
    "To": "tech@biscuitech.me",
    "Subject": "New Message from Website: " + req.body.subject,
    "TextBody": req.body.message
  })
    .then(client.sendEmail({
      "From": "tech@biscuitech.me",
      "To": req.body.email,
      "Subject": "Message Reception Confirmation",
      "TextBody": "This is an automated email to let you know that we have received your message. \n Please allow 48 business hours at most to process."
      })
    )
    .catch(res => {
      res.send("There seems to be an error with your message. Please")
      throw
    })

})
module.exports = router;

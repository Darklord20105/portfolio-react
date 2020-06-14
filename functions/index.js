const functions = require("firebase-functions");
const admin = require("firebase-admin")
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

admin.initializeApp()

// const gmailEmail = functions.config().gmail.email;
// const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        // user: gmailEmail,
        // pass: gmailPassword
        user: "omarhj1992@gmail.com",
        pass: "09940568815404279"
    }
});

exports.submit = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        if (req.method !== "POST") {
            return;
        }

        const mailOptions = {
            from: req.body.email,
            to: "omarhj1992@gmail.com",
            subject: `from my website ${req.body.email}`,
            text: req.body.message,
            html: `<p>${req.body.message}>/p>`
        };

        return mailTransport.sendMail(mailOptions).then(() => {
            console.log('New email sent to:', gmailEmail)
            res.status(200).send({ isEmailSend: true })
            return
        })
    })
})

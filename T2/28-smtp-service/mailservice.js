const nodemailer = require("nodemailer");
require('dotenv').config();

async function sendMail() {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    let info = await transporter.sendMail({
        from: 'zencare4k@gmail.com',
        to: "aramoscasado@adaits.es",
        subject: "ola",
        text: "Este es el texto",
        html: "<img src='https://pbs.twimg.com/profile_images/1482405675498102789/9Fm4ZEdV_400x400.jpg'>",
    });

    console.log("Message sent: %s", info.messageId);
}

sendMail() 
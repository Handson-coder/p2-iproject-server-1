const nodemailer = require("nodemailer");

async function main(to, username, doctor) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.GOOGLE_EMAIL, // generated ethereal user
      pass: process.env.GOOGLE_PASSWORD, // generated ethereal password
    },
  });
  let info = await transporter.sendMail({
    from: "handsonpanggabean2@gmail.com", // sender address
    to: `${to}`, // list of receivers
    subject: "Hello, I'm Handson Panggabean the admin of Halo - Dok ✔", // Subject line
    text: `
    This Message is Just For Notification/Remainder For you about 5-10 minutes later you can talk with doctor ${doctor}, Now you can click ChatBox Menu, and please wait the doctor to come join into your chat room.. Thank You for parcitipation with us, Stay Healthy!
    You : ${username}
    Doctor: ${doctor}
    `, // plain text body
    html: `<div>
    <b>This Message is Just For Notification/Remainder</b>
    <br><br>
    About 5-10 minutes later you can talk with doctor ${doctor}, Now you can click ChatBox Menu, and please wait the doctor to come join into your chat room..
    <br><br>
    Thank You for parcitipation with us, Stay Healthy!
    <br><br>
    You : ${username}
    <br>
    Doctor: ${doctor}
    </div>`, // html body
  });
  // console.log(info);
  console.log("Message sent: %s", info.accepted[0]);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

// main().catch(console.error);

module.exports = main
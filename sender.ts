

 const nodemailer = require("nodemailer");

const Mail =require("nodemailer/lib/mailer");

async function main() {


  const transporter = nodemailer.createTransport({
    host :"gmail",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "prabhakardivya02@gmail.com",
      pass: "dlepyaavngyxubgz",
    },
    logger: true
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "prabhakardivya02@gmail.com",
    to: "divya29prabhakar@gmail.com",
    subject: "Hello from node",
    text: "Hello world?",
    html: "<strong>Hello world?</strong>"
    
  });

  console.log("Message sent: %s", info.response);
}
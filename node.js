// Express
const app = require("express")();

// Config Json
const bodyParser = require("body-parser");

// Mailer - Send Email
const mailer = require("nodemailer");

// Config Mailer
const config = {
  // Host - Send Mailer
  host: "smtp.mailtrap.io",
  // Porta - Host
  port: 2525,
  // Att
  auth: {
    user: "abd1d904e2a012",
    pass: "6891211d7fd803"
  }
}

// Create Trasporte Mailer with config
const transporter = mailer.createTransport(config)

app.use(bodyParser.json());

// Send email with Mailer 
app.post("/send-email", ( req, res ) => {

  // Config message
  const message = {
    // User 
    from: "matheus.dias.dev@gmail.com",
    
    // Send To
    to: "matheuscara2000@gmail.com",
    
    // title email send
    subject: "Teste",

    // Text email send - html -> ok
    text: "Lordasdsadsaeam",
  }

  // Verification error send email
  transporter.sendMail(message, (error, info) => {
    if (error) {
      // return error 
      return res.status(400).send({"Erro": "Algo deu errado"})
    }
  })
  // return success
  return res.status(200).send({"Enviou": "Deu certo man"})
})

// Server listen -> ok
app.listen(3000, () => {
  console.log('Server On')
})
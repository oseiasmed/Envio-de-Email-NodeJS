const nodemailer = require("nodemailer")
let transporter = nodemailer.createTransport({

    host: "smtp.gmail.com",
    port: 465,
    secure: false,

    auth: {
        user: "teste@gmail.com",
        pass: "123456"
    }
})

transporter.sendMail({

    from: "Oséias Medeiros <teste@gmail.com>",
    to: "teste@yahoo.com.br",
    subject: "Teste de envio de email com o Node Mailer",
    text: "Estou testando o Node Mailer no Node JS  e estou achando muito legal.",
    html: ""
}).then(message => {
    console.log(message)
}).catch(error => {
    console.log(error)
})

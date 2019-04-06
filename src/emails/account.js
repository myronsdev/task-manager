const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'testerrr@gmail.com',
    subject: 'Thanks for signing up!',
    text: `Thanks again for joining the group, ${name}!`
  })
}

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'testerrr@gmail.com',
    subject: 'Sorry to see you go',
    text: `We are very sorry to see you go. Was there anything we could have done better, ${name}?`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
}

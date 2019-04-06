const sgMail = require('@sendgrid/mail')

const sendGridApiKey = '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'

sgMail.setApiKey(sendGridApiKey)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'testerr@gmail.com',
    subject: 'Thanks for signing up!',
    text: `Thanks again for joining the group, ${name}!`
  })
}

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'testerr@gmail.com',
    subject: 'Sorry to see you go',
    text: `We are very sorr to see you go. Was there anything we could have done better, ${name}?`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
}

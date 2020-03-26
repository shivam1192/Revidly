const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.REVIDLY);

const sendEmail = async(
    to,
    from,
    subject,val
) =>{
    const msg = {
        to: to,
        from: from,
        subject: subject,
        text: 'Hello plain world!',
        html: '<p>Hello HTML world!</p>',
        templateId: 'd-dcd4d169cb164005a35f36a0e7ecff71',
        dynamic_template_data: {
          otp: val,
        },
        hideWarnings: true 
      };
      
        sgMail.send(msg).then(() => {
                console.log(msg)
          })
          .catch(error => {
            console.error(error.toString());
            const {message, code, response} = error;
            const {headers, body} = response;
          });;
      
}

module.exports = {sendEmail}

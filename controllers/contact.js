var nodeMailer = require('nodemailer')

exports.sendTheMail = function(req, res) {
    // define our transporter to use later.
    // this will be our variable used to actually send the email.
    // note, you will have to put in your email credentials below.
    let transporter = nodeMailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: '24cfb30589031d',
            pass: '29b2f7819e7713'
        }
    });

    // this is where you define the actual email you're going to send.
    // note that the to, subject, and text fields all work with an object called
    // req.body. req is your request variable and the body object is
    // the body of the POST request sent by the user. In the case where
    // you have a contact form, all the contact information from the HTML form
    // will be inside req.body.
    // It is suggested you console.log(req.body) before proceeding to understand
    // what is inside this object.
    let mailOptions = {
        from: '"' + req.body.name + '" <' + req.body.email + '>', // sender address
        to: "Test@email.com", // list of receivers
        subject: "Portfolio Contact Request", // Subject line
        text: "Message: " + req.body.message, // plain text body
        html: '<b>Sent by: ' + req.body.name + ' </b><h4>Phone: ' + req.body.phone + ' </p><p>Message: ' + req.body.message + ' </p>' // html body
    };
    
    // Send your email and handle the error accordingly.
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.render('contact', {
                message: "Missing required input fields"
            });
            return console.log(error);
        }

        console.log('Message %s sent: %s', info.messageId, info.response);
        res.render('contact', {
            message: "Email Successfully Received"
        });
        return "Success!"
    });
    
    
};
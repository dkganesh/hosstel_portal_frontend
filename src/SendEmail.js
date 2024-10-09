import emailjs from '@emailjs/browser';


export function SendEmail(res,student){
    emailjs
      .send(
        'service_8ln4nie', // paste your ServiceID here (you'll get one when your service is created).
        'template_h3tqoxt', // paste your TemplateID here (you'll find it under email templates).
        {
          from_name: "SVCE",
          to_name: student.name, // put your name here.
          from_email: "sanjudhanuganesh@gmail.com",
          to_email: student.email, //put your email here.
          message: res,
        },
        'tWK4mvnhYslgtMkBA' //paste your Public Key here. You'll get it in your profile section.
      )
      .then(
        () => {
        alert("Verify your mail");
        },
        (error) => {
            alert("Failed");
        }
      );
}
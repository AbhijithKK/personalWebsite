function sendMail(){
    var formValues={
          name: document.getElementById("w3lName").value,
          email: document.getElementById("w3lSender").value,
          message: document.getElementById("w3lMessage").value
    };

const ServiceID="service_f63u7ho";
  const TemplateID="template_9r6aftw";
  emailjs.send(ServiceID,TemplateID,formValues).then((res)=>{
     
     console.log(res);
     alert("your message send successfully");
  }).catch((err)=> console.log(err));
}
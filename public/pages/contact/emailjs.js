(function () {
  emailjs.init("user_qDxnPLfSumE8YRYdhPLD2");
})();

function sendEmail() {
  console.log("holi");
  var params = {
    name: document.getElementById("form-name").value,
    phone: document.getElementById("form-phone").value,
    email: document.getElementById("form-email").value,
    message: document.getElementById("form-message").value,
  };
  const serviceID = "service_scrg8ek";
  const templateID = "template_gkj4ta9";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("form-name").value = "";
      document.getElementById("form-phone").value = "";
      document.getElementById("form-email").value = "";
      document.getElementById("form-message").value = "";
      console.log(res);
      alert("Your message has been sent successfully");
    })
    .catch((err) => console.error(err));
}

export default sendEmail;

import { validateContactForm } from "../utils/validate.js";

export function contactForm() {
    event.preventDefault();
    let name = getFormFieldsData("name");
    let email = getFormFieldsData("email");
    let subject = getFormFieldsData("subject");
    let message = getFormFieldsData("message");
  
    if (validateContactForm(name, email, subject, message)) {
      messageBox("Form submitted successfully", "contactMsg", "green");
      let myForm = document.getElementById("contactForm");
      let formData = new FormData(myForm);
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => console.log("Form successfully submitted"))
        .catch((error) => alert(error));
    }
  }
  
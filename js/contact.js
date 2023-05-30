


const form = document.getElementById('contactForm');
const name = document.getElementById('firstname');
const nameError = document.getElementById('nameError');
const lastName = document.getElementById('lastName');
const lastNameError = document.getElementById('lastNameError');
const email = document.getElementById('email');
const emailError = document.getElementById('emailError');
const message = document.getElementById('message');
const messageError = document.getElementById('messageError');

function validateForm() {
  event.preventDefault();

  if (findLength(firstname.value, 0)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (findLength(lastName.value, 0)) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  if (findLength(message.value, 10)) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  console.log("hi");
}

form.addEventListener("submit", validateForm);

function findLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  const patternMatches = regex.test(email);
  return patternMatches;
}



/*

fetch('https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/pages?slug=contact')
    .then (response =>response.json())
    .then (data => {
    const contactPageContent= document.getElementById ('contact-content'); /*check this info!! 
    contactPageContent.innerHTML = data [0].content.rendered; 
    });
    .catch (error =>{
    console.log ('Error:', error);
    })


    get the info from the contact form

    const contactForm = documentgetElementById ('conctactform');
    contactForm.addEventListener ('submit',function(event){
        event.preventDefault();
    });
*/
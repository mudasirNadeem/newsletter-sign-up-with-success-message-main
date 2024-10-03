var emailInput = document.getElementById('email-input');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var errrMessage = document.querySelector('.error-message');
var container = document.querySelector('.container');
var emailInformation = document.querySelector('.confirmation-card');
var confirmationEmail = document.querySelector('.confirmation-email');
function validateEmail(){
    if(emailRegex.test(emailInput.value)){
        errrMessage.classList.remove('error-message');
        errrMessage.style.display = "none";
        container.style.display = "none";
        emailInformation.style.display = "block";
        confirmationEmail.innerText = emailInput.value;
    }
    else{
        errrMessage.classList.add('error-message');
        errrMessage.style.display = "block";
        container.style.display = "flex";
        emailInformation.style.display = "none";
    }
}
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password1');
const cpassword = document.getElementById('password2');
const form = document.getElementById('form');

form.addEventListener('submit' , (event) => {
     
    event.preventDefault();
    validate();
})

 
function isEmail(emailvalue){
    const symbol = emailvalue.indexOf('@');
    const dot = emailvalue.lastIndexOf('.');
    if(symbol < 1){return false}
    if(dot < symbol + 2) return false;
    if(dot === emailvalue.length - 1) return false;    

    return true
 }
 function validate(){
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const cpasswordvalue = cpassword.value.trim();

    if(usernamevalue === ""){
        setErrorMessage(username, "Username Can not be blank")
    }
    else if(usernamevalue.length <= 5){
        setErrorMessage(username, "UserName Must be 6 charecters")
    }else{
        setSuccessMessage(username)
    }


    if(emailvalue === ""){
        setErrorMessage(email, "Email Can Not be blank")
    }else if(!isEmail(emailvalue)){
        setErrorMessage(email, "Your Input Not a valid email")
    }else{
        setSuccessMessage(email)
    }


    if(passwordvalue === ""){
        setErrorMessage(password, " Password Can not be blank")
    }
    else if(passwordvalue.length <= 10){
        setErrorMessage(password, "Password must be 11 charecters")
    }else{
        setSuccessMessage(password)
    }

    if(cpasswordvalue === ""){
        setErrorMessage(cpassword, "Password Can not be blank")
    }
    else if(cpasswordvalue.length <= 10){
        setErrorMessage(cpassword, "Password Must be 11 charecters")
    }else if(cpasswordvalue !== passwordvalue){
        setErrorMessage(cpassword, "Password Dont Motch")
    }else{
        setSuccessMessage(cpassword)
    }
 }


 function setErrorMessage(input, error){
    const formControl = input.parentElement;
    formControl.className = "form_control error";
    const span = formControl.querySelector('span');
    span.innerText = error;
 }

 function setSuccessMessage(input,success){
    const formControl = input.parentElement;
    formControl.className = "form_control success";
    const span = formControl.querySelector('span');
    span.innerText = success
 }
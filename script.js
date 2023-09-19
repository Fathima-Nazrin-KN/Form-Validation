

function validatename(){
    let nameError = document.getElementById('username-error');
    let name = document.getElementById('username');

    if(name.value.trim() == '') {
        nameError.innerHTML='username cannot be blank';
        return false;
    }else if(name.value.length < 5){
        nameError.innerHTML="username must be more than 5 character";
        return false;
    }else{
        nameError.innerHTML ='';
        return true;
    }
}
function validateEmail(){
    let emailError = document.getElementById('email-Error');
    let Email = document.getElementById('email');

    let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if( Email.value.trim()== ''){
        emailError.innerHTML = 'Email cannot be blank';
        return false;
    }else if( !Email.value.match(regEx)){
         emailError.innerHTML = 'Email is not global format';
         return false
    }else{
        emailError.innerHTML = '';
        return true;
        
    }
}
function validatePassword(){
    let passwordError = document.getElementById('password-error');
    let passWord = document.getElementById('password');

    if(passWord.value.trim() == ''){
        passwordError.innerHTML = 'Password cannot be blank';
        return false;
    }else if(passWord.value.length<6||passWord.value.length>20){
        passwordError.innerHTML = 'Password is should contain 6-20 characters';
        return false;
    } else{
        passwordError.innerHTML = '';
        return true;
    }
}
function validaterepeat(){
    let passWord = document.getElementById('password');
    let repeatpassword=document.getElementById('repeat');
    let repeatError=document.getElementById('repeat-error');
     
     if(passWord.value != repeatpassword.value){
        repeatError.innerHTML = 'repeatpassword is wrong';
        return false;
    } else{
        repeatError.innerHTML ='';
        console.log('hi')
        return true;
    }
}
function validateForm(){
    let submitError= document.getElementById('submit-error');
   
    if(!validateEmail() || !validaterepeat() || !validatePassword() || !validatename()){
        submitError.innerHTML= 'please resolve the errors'
        return false;
    }else{
        submitError.innerHTML = '';
        return true;
    }
    
}
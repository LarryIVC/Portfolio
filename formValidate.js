const myForm = document.getElementById('input-form');

function isNotLower(arg){
  if(arg.match(/^[a-z@.0-9-_]*$/)){
    return false;
  } else {
    return true;
  }
};

myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const msgError = document.getElementById('error');

  if(isNotLower(myForm.elements['email'].value)){
    let myMessage= `You must write the email in lowercase eg.(mymail@mydomain.ref)`;
    msgError.innerHTML = myMessage;
    msgError.classList.add('error-show');
    
  } else {
    
    msgError.innerHTML="";
    msgError.classList.remove('error-show');
    myForm.submit();
  }


});


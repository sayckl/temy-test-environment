const name = document.getElementById('name');
const email = document.getElementById('email');
const country = document.getElementById('country');
const state = document.getElementById('state');
const city = document.getElementById('city');
const number = document.getElementById('phonenumber');
const users = document.querySelector('.users');

function validate() {

//  event.preventDefault();

  if (!name.value) {
    name.style.border = "2px solid red";

  }
  if (!email.value) {
    email.style.border = "2px solid red";

  }else if(!email.value.match(/^\w{1,}@\w{1,}\.\w{2,}$/)) {
    alrt('Email is not correct!');
  }
  if (!country.value) {
    country.style.border = "2px solid red";

  }
  if (!state.value) {
    state.style.border = "2px solid red";

  }
  if (!city.value) {
    city.style.border = "2px solid red";

  }
  if (!number.value) {
    number.style.border = "2px solid red";

  }else if(!number.value.match(/^\d+/)) {
    alert('Number is not correct!')
  }
  return false;
}

function displayusers () {
  
}

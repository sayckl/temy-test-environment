const name = document.getElementById('name');
const email = document.getElementById('email');
const country = document.getElementById('country');
const state = document.getElementById('state');
const city = document.getElementById('city');
const number = document.getElementById('phonenumber');
const address = document.getElementById('adress');
const about_me = document.getElementById('aboutme');
const userslist = document.querySelector('.userlist');
let users;

function validate(event) {

  event.preventDefault();

  if(!name.value.match(/^[a-zA-Z\s]*$/)) {
    mane.classList.add("error");
  }
  if(!email.value.match(/^\w{1,}@\w{1,}\.\w{2,}$/)) {
    email.classList.add("error");
  }
  if (country.value !== '') {
    state.hidden = false;
  }
  if (state.value) {
    city.hidden = false;
  }
  if (!city.value) {

  }
  if(!number.value.match(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/)) {
    number.classList.add("error");
  }
  return false;
  if (!address.value) {
    address.value = null;
  }
  if (!about_me.value) {
    about_me.value = null;
  }
}
//  user = {
//    id: users.length,
//    name: ,
//    email: ,
//    phone_number: ,
//    about_me: ,
//    country_id: ,
//    state_id: ,
//    city_id:
//  }

//function sendNewUser(user) {
  //return fetch(URL + 'users', {
    //method: "POST",
    //headers: {
      //Accept: "application/json",
      //"Content-Type": "application/json"
    //},
    //body: JSON.stringify(user)
  //});
//}
//}

window.onload = fetch("http://localhost:3000/users")
  .then(function(response) {
    if (response.ok) {
      return response.json();
    }
  })
  .then(function(data) {
    users = data;
     display(users);
   });

function display(users) {
  users.forEach(function(elem){
    elem.createdAt = normaldata(elem);
    const div = document.createElement('div');
    div.className = 'user';
    const nameelem = document.createElement('div');
    nameelem.innerHTML = `${elem.name}`;
    div.appendChild(nameelem);
    const emailelem = document.createElement('div');
    emailelem.innerHTML = `${elem.email}`;
    div.appendChild(emailelem);
    const phoneelem = document.createElement('div');
    phoneelem.innerHTML = `${elem.phone_number}`;
    div.appendChild(phoneelem);
    const locationelem = document.createElement('div');
    locationelem.innerHTML = `${elem.country_id}, ${elem.state_id}, ${elem.city_id}`;
    div.appendChild(locationelem);
    const dataelem = document.createElement('div');
    dataelem.innerHTML = `${elem.createdAt}`;
    div.appendChild(dataelem);

    userslist.appendChild(div);
  });
};

function normaldata(elem) {
  let d = new Date(elem.createdAt);
  return d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear();
}

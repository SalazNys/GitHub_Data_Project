let container = document.querySelector('.info_list');


// 2. Create our Ajax Request
let request = new XMLHttpRequest();
request.addEventListener("load", displayInfo);
request.open('GET', 'https://api.github.com/users/salaznys');
request.send();

// Our display function
function displayInfo() {
  // Parse our response text
  let data = JSON.parse(this.responseText);
  let list = '';

  data.forEach( function (person) {
    list += `<li>${ }</li>`;
  });

  container.innerHTML = list;
}

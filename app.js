//grab DOM elements
let image = document.getElementById("picture");
let button = document.getElementById("btn");
//add eventlistener

button.addEventListener("click", fetchImages);

function fetchImages() {
  fetch("https://randomuser.me/api/?results=50")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let person = data.results;

      person.forEach(people => {
        let url = people.picture.medium;
        image.innerHTML += `<img src=${url} alt="">`;
      });
    })
    .catch(function(err) {
      console.error(err);
    });
  //clear the div when button is clicked again
  image.innerHTML = "";
}

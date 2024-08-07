const username = "Abdullah Ahmed";
const age = 15;
const hobbies = ["Football", "Gaming", "Coding"];

const nameElement = document.createElement("h3");
nameElement.innerText = username;

const ageElement = document.createElement("h3");
ageElement.innerText = age;

const hobbiesElement = document.createElement("h3");
hobbiesElement.innerText = hobbies.join(" | ");

document.body.appendChild(nameElement);
document.body.appendChild(ageElement);
document.body.appendChild(hobbiesElement);

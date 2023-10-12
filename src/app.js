/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["Del", "Nuestro", "Tu"];
  let adj = ["Oscuro", "Gran", "Gracioso", "Lindo"];
  let noun = ["Hombre", "Mujer", "Pez", "Raton", "Gato", "Fama"];
  let end = [".com", ".cr", ".ca", ".mx", ".net"];

  let listOfDomains = [];

  for (let pronouns of pronoun) {
    for (let adjetives of adj) {
      for (let nouns of noun) {
        for (let ends of end) {
          listOfDomains.push(pronouns + adjetives + nouns + ends);
        }
      }
    }
  }

  let randomDomainName =
    listOfDomains[Math.floor(Math.random() * listOfDomains.length - 1)];

  document.getElementById("hola").innerHTML = randomDomainName;
  document.getElementById("button").addEventListener("click", function() {
    location.reload();
    alert("Here is a better one: ");
  });
};

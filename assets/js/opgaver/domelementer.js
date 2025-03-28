/* DOMcelementer */

/* Opgave 1.1
Du skal finde elementet med id="redFigure" og console logge det.
Du skal finde elementet med id="yellowFigure" og console logge det. 
*/

// din kode her
console.log(redFigure);
console.log(yellowFigure);

/* opgave 1.2
Du skal ændre baggrundsfarve på de to elementer du har fundet i opgave 1.1
farven på elementerne skal være blå. brug evt. elelement.style.backgroundColor
*/

// din kode her
redFigure.style.backgroundColor = "blue";
yellowFigure.style.backgroundColor = "blue";

/* opgave 2.1
Du skal oprette følgende HTML elementer i Elementet med id opgaveTwo.
- et h2 med teksten: Opgave 2.1 løsning
- et p med teksten: Jeg har løst opgave 2.1
*/

// din kode her
let h21 = document.createElement("h2");
let p21 = document.createElement("p");
let opgaveTwo = document.getElementById("opgaveTwo");
h21.innerHTML = "Opgave 2.1 Løsning";
p21.innerHTML = "Jeg har Løst opgave 2.1";
opgaveTwo.appendChild(h21);
opgaveTwo.appendChild(p21);

// opgave 3 liveHTML lists
/* opgave 3.1
Du skal finde alle elementer med klassen purpleFigures og console logge resultatet
*/

// din kode her
let purpleFigures = document.getElementsByClassName("purpleFigures");
console.log(purpleFigures);

/* opgave 3.2
Du skal finde alle elementer med klassen purpleFigures og bruge array.from() til at konvertere listen
til et array hvor du kan bruge map funktionen til at ændre baggrundsfarven til rød.
array.from beskrivelse HER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
eller bruge qurySelectorAll og foreach til at loope.
*/

// din kode her
let purpleFiguresArray = Array.from(purpleFigures);
purpleFiguresArray.forEach((element) => {
  element.style.backgroundColor = "red";
});

/* opgave 3.3
Brug din array til at ændre h3 elementets, inden i purpleFigures, tekst til RED. du kan bruge
myElement.children[0].innerHTML til at ændre 1. child elements inner html.
*/

// din kode her
purpleFiguresArray.forEach((element) => {
  element.children[0].innerHTML = "RED";
});

/* opgave 4
opret DOM elementer i elementet med id opgaveFour, udfra data objectet myData.
Du skal vælge element tags der giver mening i forbindelse med HTML5 semantisk tagging.
Fyld dine elementers innerHtML eller andre atributter med dine data
*/

const myData = {
  name: "tiger",
  image: "assets/img/standard_tiger.jpg",
  description:
    "En tiger er et stort, katteagtig rovdyr med orange og sort striber i pelsen og skarpe tænder og kløer.",
};

// din kode her¨
let opgaveFour = document.getElementById("opgaveFour");
let figure = document.createElement("figure");
let img = document.createElement("img");
let figcaption = document.createElement("figcaption");
let h2 = document.createElement("h2");
let p = document.createElement("p");
console.log(opgaveFour);
img.src = myData.image;
h2.innerHTML = myData.name;
p.innerHTML = myData.description;
figure.appendChild(img);
figcaption.appendChild(h2);
figcaption.appendChild(p);
figure.appendChild(figcaption);
opgaveFour.appendChild(figure);

const nameSurnameField = document.getElementById("name-surname");
const kmField = document.getElementById("km");
const ageField = document.getElementById("age");


const nameSurname = document.getElementById("nome_cognome");
const km = document.getElementById("km_da_percorrere");
const eta = document.getElementById("eta");
const prezzo = document.getElementById("price");


const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const distance = parseInt(kmField.value);
    const age = parseInt(ageField.value);

    
    let price = distance * 0.21;
    let discount20 = distance * 0.2;
    let discount40 = distance * 0.4;
    let finalPrice;


    // // valutare i parametri che compongono il prezzo del viaggio

    // // SE il passeggero è minorenne
    if (ageField.value < 18) {
    //     // setto il risultato su sconto 20%
        finalPrice = price - discount20;
    //     // SE il passeggero è over 65
    } else if (ageField.value > 65) {
    //     // setto il risultato su sconto 40%
        finalPrice = price - discount40;
    } else {
    //     // SE il passeggero non è minorenne né over 65 setto il risultato su sconto 0%
        finalPrice = price
    }

    nameSurname.innerText = nameSurnameField.value.trim();
    km.innerText = kmField.value.trim();
    eta.innerText = ageField.value.trim();

    prezzo.innerText = `€${finalPrice.value.toFixed(2)}`;

});
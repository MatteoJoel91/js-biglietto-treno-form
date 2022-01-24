let name = document.getElementById('name');
let km = document.getElementById('km');

let buttonGenera = document.getElementById("genera");
let buttonAnnulla = document.getElementById("annulla");

buttonGenera.addEventListener('click',    
    function() {

        if (name.value == "") {
            alert('Scrvi il tuo Nome/Cognome');
        } else {
            document.getElementById('ID_passeggiero').innerHTML = name;
            name.value = "";
            color.value = "";
        }
    }
);




// Prezzo per kilometro
const prezzoKm = 0.21;
console.log(prezzoKm);

// Prezzo biglietto calcolato senza sconti
let prezzoBiglietto = km * prezzoKm;
console.log(prezzoBiglietto);

// sconto del 20% per minorenni
let sconto20 = (prezzoBiglietto * 20 / 100);
console.log(sconto20);

// sconto del 40% per over 65
let sconto40 = (prezzoBiglietto * 40 / 100);
console.log(sconto40);

let bigliettoNormale = ('Biglietto Standard');

let bigliettoMinorenni = ('Biglietto sconto 20%');

let BigliettoOver = ('Biglietto sconto 40%');

// Calcolo del prezzo finale in base ad età con relativo sconto applicato
if(eta < 18){
    let prezzoFinale = prezzoBiglietto - sconto20;
    console.log(prezzoFinale);
    document.getElementById('tipo_biglietto').innerHTML = bigliettoMinorenni;
    document.getElementById('costo_biglietto').innerHTML = prezzoFinale.toFixed(2);
}
else if (eta >65){
    let prezzoFinale = prezzoBiglietto - sconto40;
    console.log(prezzoFinale);
    document.getElementById('tipo_biglietto').innerHTML = BigliettoOver;
    document.getElementById('costo_biglietto').innerHTML = prezzoFinale.toFixed(2);
}
else{
    document.getElementById('tipo_biglietto').innerHTML = bigliettoNormale;
    document.getElementById('costo_biglietto').innerHTML = prezzoBiglietto.toFixed(2);
}
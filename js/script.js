

let buttonGenera = document.getElementById("genera");
let buttonAnnulla = document.getElementById("annulla");

// Bottone Genera
buttonGenera.addEventListener('click',    
    function() {

        // Dichiaro le variabili
        let name = document.getElementById('name').value;
        let km = document.getElementById('km').value;
        let eta = document.getElementById('eta').value;

        // Variabile per la id="sezione" class"Hide"
        let visibile = document.getElementById("sezione");

        // Condizione di controllo
        if (name == "") {
            alert('Scrvi il tuo Nome/Cognome');
            visibile.classList.add("hide");
        } else {
            document.getElementById('ID_passeggiero').innerHTML = name;
            visibile.classList.remove("hide");
        }

        if (km == "") {
            alert('Scrvi il numero dei chilometri');
            visibile.classList.add("hide");
        } else{
            visibile.classList.remove("hide");
        }

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

        let bigliettoMinorenni = ('Sconto 20%');

        let bigliettoOver = ('Sconto 40%');

        // Calcolo del prezzo finale in base ad età con relativo sconto applicato
        if(eta == 'Minorenne'){
            let prezzoFinale = prezzoBiglietto - sconto20;
            console.log(prezzoFinale);
            document.getElementById('tipo_biglietto').innerHTML = bigliettoMinorenni;
            document.getElementById('costo_biglietto').innerHTML = prezzoFinale.toFixed(2);
        }
        else if (eta == 'Over-65'){
            let prezzoFinale = prezzoBiglietto - sconto40;
            console.log(prezzoFinale);
            document.getElementById('tipo_biglietto').innerHTML = bigliettoOver;
            document.getElementById('costo_biglietto').innerHTML = prezzoFinale.toFixed(2);
        }
        else if (eta == 'Maggiorenne'){
            document.getElementById('tipo_biglietto').innerHTML = bigliettoNormale;
            document.getElementById('costo_biglietto').innerHTML = prezzoBiglietto.toFixed(2);
        }
        else{
            alert('Dichiara fascia d\'età');
            visibile.classList.add("hide");
        }
        
        
        // Numero random della carrozza
        let randomCarrozza = Math.floor(Math.random() * 9 +1);
        document.getElementById("numero_carrozza").innerHTML = randomCarrozza;

        // Numero random del codice cp
        let max=90000;
        let min=99999;
        let randomCodice = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById("codice_cp").innerHTML = randomCodice;
        
    }
);


// Bottone Annulla
buttonAnnulla.addEventListener('click',
    function(){

        let visibile = document.getElementById("sezione");
        visibile.classList.add("hide"); 
        
        document.getElementById('name').innerHTML = ('');
    }
    
);

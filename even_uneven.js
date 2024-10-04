/* 
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
e Dichiariamo chi ha vinto.
Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Domande da farsi quando si crea una funzione:
Come dovrebbe chiamarsi?
Ho bisogno di parametri?
Devo restituire un valore?
Se sì, di che tipo?
 */
let even_uneven = prompt("scegli tra pari e dispari")
if (even_uneven === "pari"){
    alert("hai scelto pari")
    console.log(even_uneven);
    
} else if (even_uneven === "dispari"){
    alert("hai scelto dispari")
    console.log(even_uneven);
}  else {
    alert("il valore scritto non è un valore valido. Ricarica la pagina e scegli un valore adatto")
}


let user_number = Number(prompt(" ora inserisci un numero da 1 a 5, in base alla decisione di prima"))
console.log("hai scelto il numero", user_number,);

let computer_number = getRndInteger(1,5);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    
  }

 

console.log("il computer ha scelto",computer_number);

function input_number_sum(){
   let sum = Number(user_number + computer_number)

    if(sum %2 ==0 && even_uneven === "pari"){
        alert("HAI VINTO!", sum);
        
        
    } 
    else if( sum %2 ==0 && even_uneven === "dispari"){
        alert("HAI PERSO!", sum);
     
    }
    else if( sum %2 !==0 && even_uneven === "dispari"){
        alert("HAI VINTO!", sum);
        
        }
        else if( sum %2 !==0 && even_uneven === "pari"){
            alert("HAI PERSO!", sum);
            
            }
            return("il totale è:", sum);
    }

console.log(input_number_sum());




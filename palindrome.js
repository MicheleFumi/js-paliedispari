/* 
Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
 */

// creo la funzione dove assegno due variabili per controllare la parola e metà di essa

function isPalindrome(input_text) {
   let text_lenght = input_text.length
   let mid_text = Math.floor(text_lenght/2);
   
   //creo un ciclo che mi controlla se la parola è palindroma 
    for (let i = 0; i < mid_text; i++) {
    
    if (input_text[i] == input_text[text_lenght -1 -i] ){
        return "la parola è palindroma";
        
        
        
    }else {
        return "la parola non è palindroma";
        
        
    }
 
 } 
}
//creo la variabile con il prompt e il log della verifica
let input_text =prompt("inserisci una parola per verificare la palindricità di essa")
 console.log(isPalindrome(input_text));
 




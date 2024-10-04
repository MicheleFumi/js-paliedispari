/* 
Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
 */
let message;
let input_text =prompt("inserisci una parola per verificare la palindricità di essa")
function isPalindrome(input_text) {
   let text_lenght = input_text.length
   let mid_text = Math.floor(text_lenght/2);
   
    for (let i = 0; i < mid_text; i++) {
    
    if (input_text[i] == input_text[text_lenght -1 -i] ){
        message = "la parola è palindroma";
        console.log(message);
    
        
    }else {
        message = "la parola non è palindroma";
        
        
    }
 
 } 
}
 




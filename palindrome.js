/* 
Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
 */


let input_text =prompt("inserisci una parola per verificare la palindricità di essa")
// creo una funzione dove divido la parola promptata in un array, li inverto e li unisco di nuovo, tornando sotto forma di stringa
function isPalindrome() {
   let reverse = input_text.split("").reverse().join("")
   
   //verifico che i caratteri della parola input_text siano uguali a quelli di reverse mi controlla se la parola è palindroma 
    
    if (reverse == input_text){
        return "la parola è palindroma";
        
        
        
    }else {
        return "la parola non è palindroma";
        
        
    }
 
 
}
//creo la variabile con il prompt e il log della verifica

 console.log(isPalindrome());
 




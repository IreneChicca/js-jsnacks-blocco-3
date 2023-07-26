// Chiedi all'utente un primo numero, poi un secondo e genera un numero casuale compreso tra i due.


let minNum = parseInt(prompt("Inserisci un numero minimo"))
let maxNum = parseInt(prompt("Inserisci un numero massimo"))




const random = Math.floor(Math.random() * (maxNum - minNum) + minNum);


// const random = Math.floor(Math.random() * maxNum) + minNum;


alert(random)








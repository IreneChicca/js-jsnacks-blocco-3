// Chiedi all'utente un primo numero, poi un secondo e genera un numero casuale compreso tra i due.


// let minNum = parseInt(prompt("Inserisci un numero minimo"))
// let maxNum = parseInt(prompt("Inserisci un numero massimo"))




// const random = Math.floor(Math.random() * (maxNum - minNum) + minNum);


// const random = Math.floor(Math.random() * maxNum) + minNum;


// alert(random)




// Dare la possibilità di inserire due parole. Verificare che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


// const firstW = prompt("Inserisci una parola")

// const secondW = prompt("Inserisci un'altra parola")

// let firstL = firstW.length
// let secondL = secondW.length

// if (firstL == secondL) {

//   console.log(firstW)
// console.log(secondW)


//}


// else if (firstL > secondL) {

// console.log(firstW)

// }

// else if (firstL < secondL) {

// console.log(secondW)
// }

// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

// const myArr = [];

// let sum = 0;

// while (sum < 50) {

// const newNum = parseInt(prompt("inserisci un numero"));
// sum += newNum;

// myArr.push(newNum)

// console.log(newNum)
// console.log(sum)

// }

// const numEle = myArr.length
// const media = sum / numEle

// console.log(media)


// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.
// Calcola la media dei numeri inseriti.





// Trovare gli errori nel seguente codice:

// --------------------------
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = [];   // [] mancanti
for (let i = 0; i < numbers.length - 1; i++) {  // il ;

    const number = numbers[i];
    console.log(number)
    if (number % 2 != 0 && number <= 5) {                 // != e il ; dopo l'if
        evenNumbers.push(number);
    }



}
console.log(evenNumbers);

    // dovrebbe restituire [1,3,5]
// --------------------------





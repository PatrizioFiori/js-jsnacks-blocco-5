const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

const numbersPiuUno = numbers.map(elemento => {
    return elemento + 1   
})

console.log(numbersPiuUno);



const numbersV2 = [2, 8, 4, 7, 2, 87];


console.log("=== Versione n2 ===");
// Return e destructuring impliciti 

const numbersPiuUnoV2 = numbersV2.map (elem => elem + 1)

console.log(numbersPiuUnoV2);

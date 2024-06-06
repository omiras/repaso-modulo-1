// enunciado https://www.codewars.com/kata/557af4c6169ac832300000ba/

function removeRotten(bagOfFruits) {
    // 1. Crear un array vacío
    let freshFruits = [];

    // REcorrer el array bagsOfFruits y para cada elemento comprobar

    for (let fruit of bagOfFruits) {
        // 1. Eliminar la subcadena "rotten" de fruit
        // 2. Transformarlo en minúscula
        let cleanedFruit = fruit.replace("rotten", "");
        cleanedFruit = cleanedFruit.toLowerCase();
        freshFruits.push(fruit);
    }

    // 3. Tenemos que añadir el elemento al array freshFuits

    // 2. DEvolver el array que hemos creado
    return freshFruits;
}

// Caso en el que no tenemos fruta alguna
console.log(removeRotten([])); // []

// Caso en que no tenemos frutas podridas
console.log(removeRotten(["apple", "banana", "kiwi"])); // ["apple","banana","kiwi"])

// Caso frutas podridas
console.log(removeRotten(["apple", "rottenBanana", "kiwi"])); // ["apple","banana","kiwi"])




// enunciado https://www.codewars.com/kata/557af4c6169ac832300000ba/

function removeRotten(bagOfFruits) {
    // ...
    let freshFruits = [];
    if (bagOfFruits.length < 1 || !bagOfFruits) {
        return [];
    }
    else if (bagOfFruits.length > 0) {
        bagOfFruits.forEach(fruit => {
            if (fruit.includes('rotten') == false) {
                freshFruits.push(fruit);
            }
            if (fruit.includes('rotten') == true) {
                fruit = fruit.slice(6, fruit.length).toLowerCase();
                freshFruits.push(fruit);
                }
                })
                }
            return freshFruits;
}

console.log(removeRotten([])); // []

console.log(removeRotten(["apple", "banana", "kiwi", "melone", "orange"])); // ["apple","banana","kiwi","melone","orange"])

console.log(removeRotten(["apple", "rottenBanana", "apple", "rottenApple"])); //["apple","banana","apple"] 


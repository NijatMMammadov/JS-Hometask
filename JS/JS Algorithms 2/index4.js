// 4 \\ const fruits = ["alma", "banan", "qarpız", " portağal  ", "ananas", "nar"]  array daxilindəki ən uzun sözü tapan alqoritm yazın

const fruits = ["alma", "banan", "qarpız", " portağal  ", "ananas", "nar"]

let wordMax = ""

for (let i = 0; i < fruits.length; i++) {

    if (fruits[i].length > wordMax.length) {
        wordMax = fruits[i]
    }
}
console.log(wordMax);
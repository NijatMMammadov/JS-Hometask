// 2 \\ Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.

let num = 100
let count = 0

for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        count++
    }
}
console.log(count);
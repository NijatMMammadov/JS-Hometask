
// 8. Bir funksiya yazın. Bir ədədi parametr olaraq qəbul edir. Eger o eded 50den kicikdirse o edede qeder 3-e bolunen, 50-100 araligindadirsa o edede qeder 5e bolunen, 100den boyukdurse o edede qeder 8 e bolunen ededlerin sayini ekrana cixardan bir alqoritm yazin.
let say = 0

const bol = (a) => {
    for (let i = 1; i < a; i++) {
        if (a < 50 && i % 3 == 0) {
            say++
        } else if (a <= 100 && a >= 50 && i % 5 == 0) {
            say++
        } else if (a > 100 && i % 8 == 0) {
            say++
        }
    }
    console.log(say);
}

// bol(77)

// 7. Bir function yazin bir reqem qebul edir ve hemin reqemin perfect number olub-olmamasini yoxlayir. Perfect number - ededin ozunden bashqa butun bolenlerinin cemin ededin ozune beraberdir-se o zaman eded perfect number hesab olunur. Meselen 6 -->  1+2+3 =  6, demeli 6 perfect number-dir.

let sum = 0
const perfect = (a) => {
    for (let i = 0; i < a; i++) {
        if (a % i == 0) {
            sum += i
        }
    }
    if (sum == a) {
        console.log("perfect number-dir");
    } else {
        console.log("perfect number deyil");
    }
}
// perfect(6)
// 3. Bir funksiya yazın iki parametr qəbul etsin. Birinci parametr rəqəmlərdən ibarət array , ikinici parametr isə rəqəm olsun. Arraydəki bütün  rəqəmlər daxil edilən ikinci parametrin bölənləridirsə, funksiya true return etsin, yox bir dənəsi belə böləni deyilsə false qaytarsın.
// console.log(checkFactors([2,3,4,6],12))
// Expected Output:
// true
// console.log(checkFactors([2,3,4,5],12))
// Expected Output:
// false


let checkFactors = [2, 3, 4, 6]
//let checkFactors = [2, 3, 4, 5]

let num = 12
let a = 0

const check = () => {
    for (let i = 0; i < checkFactors.length; i++) {
        if (num % checkFactors[i] == 0) {
            a++
        } else {
            console.log("false");
            break
        }
    } if (a == checkFactors.length) {
        console.log("true");
    }
}
// check(checkFactors)
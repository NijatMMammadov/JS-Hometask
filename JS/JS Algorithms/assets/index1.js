// 1.Bir fuksiya yazın. Bu funksiya rəqəmlərdən ibarət bir arrayi parametr kimi qəbul etsin.Əgər daxil olunan arraydə əgər bütün rəqəmlər təkdirsə true, cütdürsə false qaytaran funksiya yazın.
// Expected Output:
//  console.log(FindEven[3,5,7]) -> true     console.log(FindEven[2,3,5,7,8]) -> false




// let array3 = [2, 3, 6, 8, 7, 6, 10]
// let array3 = [2, 10, 6, 8, 70, 614]
let array3 = [7, 3, 61, 13, 79, 1]

let tek = 0

const eded = (a) => {
    for (let i = 0; i < array3.length; i++) {
        if (array3[i] % 2 == 1) {
            tek++
            if (tek == array3.length) {
                console.log("true");
            }
        } else {
            console.log("false");
            break
        }
    }
}
// eded(array3)



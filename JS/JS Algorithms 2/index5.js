// 5.arr=[23,1,5,3,12,4,9,81,7,11,22,31,6]
//  Verilmiş arrayın cüt ədədlərinin maksimumu ilə tək ədədlərinin minimumunun yerini dəyişən proqram tərtib edin. (custom yaz)

arr = [23, 1, 5, 3, 12, 4, 9, 81, 7, 11, 22, 31, 6]

let enBoyukCut = - Infinity
let enKicikTek = Infinity
let enBoyukCutIndex = 0
let enKicikTekIndex = 0

for (let i = 0; i < arr.length; i++) {

    if (arr[i] > enBoyukCut && arr[i] % 2 == 0) {
        enBoyukCut = arr[i]
        enBoyukCutIndex = i

    } else if (arr[i] < enKicikTek) {
        enKicikTek = arr[i]
        enKicikTekIndex = i
    }
}

console.log(enBoyukCut, enBoyukCutIndex);
console.log(enKicikTek, enKicikTekIndex);

arr[enBoyukCutIndex]=enKicikTek
arr[enKicikTekIndex]=enBoyukCut

console.log(arr);
// 1 \\ Verilmiş 3 rəqəmli ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin.

let num = "246"
let sum = 0
let hasil = 1
let edediOrta = 0

for (let i = 0; i < num.length; i++) {
    sum += Number(num[i])
    hasil *= num[i]
}

edediOrta = sum / num.length
console.log(sum, hasil, edediOrta);
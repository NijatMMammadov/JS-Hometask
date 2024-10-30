// 10. Bir function yazin, function bir herf ve bir reqem qebul edir ve gonderilen reqem qeder hemin herfi yazib return edir, meselen function-a arqument olaraq 3 ve b gonderilerse output bbb olmalidir.

let list = ""

const write = (a, c) => {
    for (let i = 0; i < a; i++) {
        list += c
    }
    console.log(list);

}
// write(3, "b")

// 13. İstifadəçinin online sifarişinə əsasən çatdırılma müddəti və kargo haqqını hesablayın. Sifariş məbləğinə və üzv statusuna görə çatdırılma dəyişə bilər.
// : Əgər istifadəçi Premium üzvdürsə, sifariş məbləğindən asılı olmayaraq çatdırılma 1 gün ərzində və pulsuz olur.
// : Əgər sifariş məbləği 150 TL-dən çoxdursa, kargo pulsuzdur və çatdırılma 2 gün ərzində olur.
// : Əgər sifariş məbləği 100-150 TL arasındadırsa, çatdırılma 3 gün ərzindədir və kargo 20 TL-dir.
// : Sifariş məbləği 100 TL-dən azdırsa, çatdırılma 5 gün ərzində olur və kargo haqqı 30 TL-dir.

const kargo = (a) => {
    if (a == "premium") {
        console.log("1 gun , pulsuz");
    } else if (a > 150) {
        console.log("2 gun , pulsuz");
    } else if (a >= 100 && a <= 150) {
        console.log("3 gun , 20tl");
    } else if (a > 0 && a < 100) {
        console.log("5 gun, 30tl");
    } else {
        console.log("duzgun melumat daxil edin");
    }
}


// kargo("premium")
// kargo(170)
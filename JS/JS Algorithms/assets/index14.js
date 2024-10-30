
// 14. Bir yemək reseptinin həm istifadə olunan maddələrin sayına, həm də sağlamlıq vəziyyətinə görə çətinlik və sağlamlıq dərəcəsini müəyyən edin.
// : Əgər resept 10-dan çox maddə istifadə edirsə, çətinlik səviyyəsi "Çətin" olur. Eyni zamanda əgər 3-dən çox yağlı maddə varsa, "Sağlam deyil" olaraq işarələnir.
// : Əgər resept 5-10 arası maddə istifadə edirsə, "Orta" olur. Əgər 1-3 arası yağlı maddə varsa, "Orta Sağlam" olur.
// : Əgər resept 5-dən az maddə istifadə edirsə, "Asan" olur. Yağlı maddə yoxdursa, "Sağlam" olur.


const inform = (a, b) => {
    if (a > 10) {
        console.log("Çetin");
    } else if (a >= 5 && a <= 10) {
        console.log("orta");
    } else if (a > 0 && a < 5) {
        console.log("asan");
    } else {
        console.log("duzgun melumat daxil edin");
    }

    if (b > 3) {
        console.log("Saqlam");
    } else if (b >= 1 && b <= 3) {
        console.log("Orta Sağlam");
    } else if (b < 1) {
        console.log("Sağlam");
    }

}

// inform(15, 1)

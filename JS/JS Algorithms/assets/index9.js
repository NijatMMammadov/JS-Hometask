// 9.  Bir function yazin bir reqem parametri Qebul edir ve hemin reqeme uygun olan ayin adini qaytarir, meselen 5 daxil olunsa function "May" return etmelidir, eger 12-den boyuk ve ya menfi olan bir deyer daxil olunsa invalid input return etmelidir


let months = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"]

const month = (i) => {
    if (i >= 1 && i <= 12) {
        console.log(months[i - 1]);
    } else {
        console.log("Invalid input");
    }
}

// month(10)

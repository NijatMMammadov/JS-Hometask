// 11. İstifadəçiyə hava durumuna və günün vaxtına görə həm geyim, həm də ediləcək aktivite haqqında tövsiyə verin.
// : Hava temperaturu 30°C-dən yuxarıdırsa və günorta saatlarıdırsa (12-15 arası) "Çimərlik geyimi geyinin və üzməyə gedin."
// : Hava temperaturu 20-30°C arasındadırsa və səhər saatlarıdırsa (6-12 arası) "Yüngül idman geyimi geyinin və qaçışa çıxın."
// : Hava temperaturu 10-20°C arasındadırsa "Gödəkçə geyinin və gəzintiyə çıxın."
// : Əgər hava temperaturu 10°C-dən aşağıdırsa və axşam saatlarıdırsa (18-24 arası) "Qalın palto geyinin və evdə qalın."

// let a = prompt("tem")
// let b = prompt("saat")
// a=Number()
// b=Number()



const info = (a, b) => {
    if (a > 30 && b > 12 && b < 15) {
        console.log("Çimərlik geyimi geyinin və üzməyə gedin.");
    } else if (a >= 20 && a < 30 && b > 6 && b < 12) {
        console.log("Yüngül idman geyimi geyinin və qaçşa çixin.");
    } else if (a >= 10 && a <= 20) {
        console.log("Gödəkçə geyinin və gəzintiyə çixin.");
    } else if (10 > a && b > 18 && b < 24) {
        console.log("Qalin palto geyinin və evdə qalin.");
    } else {
        console.log("duzgun melumat daxil edin");
    }
}

// info(35, 14)
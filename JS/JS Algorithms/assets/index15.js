// 15. Bir istifadəçinin yaşına və gəlirinə görə mənzil krediti üçün uyğun olub-olmadığını müəyyən edin. Şərtlər bir qədər mürəkkəbdir.
// : Əgər istifadəçi 25-40 yaş arasındadırsa və gəliri 5000 TL-dən çoxdursa, müraciət uyğundur.
// : Əgər istifadəçi 40 yaşdan böyükdürsə və gəliri 7000 TL-dən çoxdursa, uyğun sayılır.
// : Əgər istifadəçi 25 yaşdan kiçikdirsə, amma 10000 TL-dən çox gəliri varsa, uyğun sayılır.
// : Bu şərtlərdən heç biri yerinə yetirilmirsə, müraciət rədd edilir.



const home = (age, maash) => {
    if (age >= 25 && age <= 40 && maash > 5000) {
        console.log("Müraciət uyğundur");
    } else if (age > 40 && maash > 70000) {
        console.log("Müraciət uyğundur");
    } else if (age < 25 && maash > 10000) {
        console.log("Müraciət uyğundur");
    } else {
        console.log("müraciət rədd edilir");
    }
}

// home (27, 7777)

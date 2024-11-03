// 3 \\

let sampleNews = `As software developers, the natural tendency is to start developing applications based on your ownhands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`;

// 3.1 \\ sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın.

let count = 0

for (let i = 0; i < sampleNews.length; i++) {
    if (sampleNews[i] == " ") {
        count++
    }
}
console.log(count);

// 3.2 \\ sampleNews mətnində olan vergül və nöqtələrin sayını təyin edən proqram yazın.

let akk = 0

for (let i = 0; i < sampleNews.length; i++) {
    if (sampleNews[i] == ",") {
        akk++
    }
}
console.log(akk);

let akkum = 0

for (let i = 0; i < sampleNews.length; i++) {
    if (sampleNews[i] == ".") {
        akkum++
    }
}
console.log(akkum);

// 3.3 \\ sampleNews mətnində neçə hərf olduğunu tapan proqram yazın(vergül ve boşluqlar nezere alınmasın.)

let countt = 0

for (let i = 0; i < sampleNews.length; i++) {
    if (sampleNews[i] != " ") {
        sampleNews[i]
        countt++
    }
}
console.log(countt);


// 3.4 \\ sampleNews mətnində neçə söz olduğunu tapan proqram yazın.

arr = []

for (let i = 0; i < sampleNews.length; i++) {
    arr = sampleNews.split(" ")
}
console.log(arr.length);

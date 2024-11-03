const students = [
    { name: "Ali", scores: [90, 85, 92] },
    { name: "Mammal", scores: [75, 80, 85] },
    { name: "Camil", scores: [90, 95, 85] },
    { name: "Davud", scores: [100, 100, 100] }];

// 6.1 tələbələr array-ində tələbələrin ortalaması ən yüksək olanı tapan proqram yazın


let ortaScoreMax = 0
let bestSt=""

for (let i = 0; i < students.length; i++) {
    studentScores = students[i].scores
    // console.log(studentScores);

    let sumScores = studentScores.reduce((akk, element,) => akk + element, 0)
    let ortaScore = sumScores / studentScores.length

    if (ortaScore > ortaScoreMax) {
        ortaScoreMax = ortaScore
        bestSt=students[i].name
    }

}

console.log(ortaScoreMax,bestSt);


//*--------------sehv------------------------------------------

// for (let i = 0; i < students.length; i++) {
//     studentScores = students[i].scores
//     console.log(studentScores);

//     let sumScore = 0
//     let ortaScor = 0

//     for (let j = 0; j < studentScores.length; j++) {
//         sumScore += studentScores[i]
//         ortaScor /= studentScores.length

//     }
//     console.log(sumScore, ortaScor);

// }







// 6.2 \\ ortalaması 90-dan yuxarı olanları tapan proqram yazın

for (let i = 0; i < students.length; i++) {
    studentScores = students[i].scores
    // console.log(studentScores);

    let sumScores = studentScores.reduce((akk, element,) => akk + element, 0)
    ortaScore = sumScores / studentScores.length
    // console.log(ortaScore);

    if (ortaScore > 90) {
        console.log(students[i].name);
    }
}



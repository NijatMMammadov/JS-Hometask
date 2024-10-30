// 12. Bir tələbənin imtahan nəticəsinə əsasən aldığı qiyməti və əlavə bonus xalını hesablayın. Bonus xalları, tələbənin iştirak etdiyi əlavə fəaliyyətlərdən gəlir.
// : Əgər tələbənin qiyməti 85 və daha yuxarıdırsa və 3-dən çox fəaliyyətə qatılıbsa, qiymətinə +5 bonus əlavə olunur.
// : Əgər tələbənin qiyməti 70-84 arasındadırsa və ən azı 2 fəaliyyətə qatılıbsa, qiymətinə +3 bonus əlavə olunur.
// : Əgər tələbənin qiyməti 60-69 arasındadırsa və 1 fəaliyyətə qatılıbsa, qiymətinə +2 bonus əlavə olunur.
// : Bonuslar əlavə edildikdən sonra yekun qiymət 100-ü keçə bilməz.


const grade = (q, b) => {
    if (q >= 85 && b > 3) {
        q += 5
        if (q > 100) {
            q = 100
        }
    } else if (q >= 70 && q < 85 && b >= 2) {
        q += 3
    } else if (q >= 60 && q < 70 && b >= 1) {
        q += 2
    }
    console.log(q);
}

// grade(77,7)

// 2.Bir fuksiya yazın. Bu funksiya rəqəmlərdən ibarət bir arrayi parametr kimi qəbul etsin və daxil edilən arraydə ədədlərin ədədi ortasını tapsın.Sonda nəticəni tam ədədə yuvarlaqlaşdırın.
// console.log(average([10,30,40,45,35]))
// Expected Output:
// 32



let arr = [58, 22, 37, 43, 59, 22];
sum = 0

const edediOrta = (a) => {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        x = sum
        x /= arr.length
    }
    console.log(parseInt(x));
}

// edediOrta(arr)
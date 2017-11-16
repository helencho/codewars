function averageString(str) {
    var strArr = str.split(" ");

    var numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    var ans = [];

    for (let i = 0; i < strArr.length; i++) {
        if (numbers.includes(strArr[i])) {
            ans.push(numbers.indexOf(strArr[i]));
        } else {
            return "n/a";
        }
    }

    var answer = 0;

    answer = Math.floor(ans.reduce((a, x) => {
        return a += x;
    }, 0) / ans.length);

    return !str ? "n/a" : numbers[answer];

}

console.log(averageString("twelve nine ten two")) // "n/a");
console.log(averageString("ten nine five two")) // "n/a");
console.log(averageString("zero nine five two")) // "four");
console.log(averageString("four six two three")) // "three");
console.log(averageString("one two three four five")) // "three");
console.log(averageString("five four")) // "four");
console.log(averageString("zero zero zero zero zero")) // "zero");
console.log(averageString("")) //, "n/a");


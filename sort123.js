// Sort one three two 
// https://www.codewars.com/kata/sort-one-three-two/train/javascript 

function sortByName(ary) {
    var ones = [" ", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    var tens = [" ", " ", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    var hundreds = ["hundred"]

    var toStr = [];

    for (let i = 0; i < ary.length; i++) {
        var numArr = ary[i].toString().split("");

        if (ary[i] === 0) {
            toStr.push("zero");
        } else if (ary[i] <= 19) {
            toStr.push(ones[ary[i]])
        } else if (ary[i] <= 99) {
            var a = tens[numArr[0]];
            var b = ones[numArr[1]];
            toStr.push(a + " " + b);
        } else if (numArr[1] === "0" && numArr[2] === "0") {
            var a = ones[numArr[0]];
            var b = hundreds[0];
            toStr.push(a + " " + b);
        } else if (numArr[1] === "0") {
            var a = ones[numArr[0]];
            var b = hundreds[0];
            var c = ones[numArr[2]];
            toStr.push(a + " " + b + " " + c)
        } else if (numArr[1] === "1") {
            var a = ones[numArr[0]];
            var b = hundreds[0];
            var c = ones[numArr[1] + numArr[2]];
            toStr.push(a + " " + b + " " + c);
        } else if (ary[i] >= 120) {
            var a = ones[numArr[0]];
            var b = hundreds[0];
            var c = tens[numArr[1]];
            var d = ones[numArr[2]];
            toStr.push(a + " " + b + " " + c + " " + d);
        }
    }

    // array of string, sorted alphabetically 
    var draft = toStr.sort();

    function strToNum(strArr) {
        var numArr = [];
        for (let i = 0; i < strArr.length; i++) {
            var currNumStr = strArr[i].split(" ");
            console.log(currNumStr)

            if (strArr[i].trim() === "twenty") {
                numArr.push(20);

            } else if (strArr[i] === "zero") {
                numArr.push(0);

            } else if (currNumStr.length === 1) {
                var a = ones.indexOf(currNumStr[0]);
                numArr.push(parseInt(a));

            } else if (currNumStr.length === 2 && currNumStr[1] === "hundred") {
                var a = ones.indexOf(currNumStr[0]);
                var b = "00";
                numArr.push(parseInt(a + "" + b));
            } else if (currNumStr.length === 2) {
                var a = tens.indexOf(currNumStr[0]);
                var b = ones.indexOf(currNumStr[1]);
                numArr.push(parseInt(a + "" + b));

            } else if (ones.indexOf(currNumStr[2]) >= 10) {
                var a = ones.indexOf(currNumStr[0]);
                var b = ones.indexOf(currNumStr[2]);
                numArr.push(parseInt(a + "" + b));

            } else if (currNumStr.length === 3 && tens.includes(currNumStr[0])) {
                var a = tens.indexOf(currNumStr[0]);
                var b = "0";
                numArr.push(parseInt(a + "" + b));

            } else if (currNumStr.length === 3) {
                var a = ones.indexOf(currNumStr[0]);
                var b = hundreds.indexOf(currNumStr[1]);
                var c = ones.indexOf(currNumStr[2]);
                numArr.push(parseInt(a + "" + b + "" + c));

            } else if (currNumStr.length === 4) {
                var a = ones.indexOf(currNumStr[[0]]);
                var b = tens.indexOf(currNumStr[2])
                var c = ones.indexOf(currNumStr[3]);
                numArr.push(parseInt(a + "" + b + "" + c));

            } else if (currNumStr[4] === "") {
                var a = ones.indexOf(currNumStr[0]);
                var b = tens.indexOf(currNumStr[2]);
                var c = "0";
                numArr.push(parseInt(a + "" + b + "" + c));
            } else if (currNumStr.length === 5) {
                var a = ones.indexOf(currNumStr[0]);
                var b = 1;
                var c = ones.indexOf(currNumStr[4]);
                numArr.push(parseInt(a + "" + b + "" + c));
            }
        }
        return numArr;
    }
    return strToNum(draft);
}


console.log(sortByName([290, 82, 853, 591, 517, 981, 932, 661, 186, 940])) // [853, 82, 591, 517, 981, 940, 932, 186, 661, 290]
// console.log(sortByName([200, 300, 100, 99, 999])) // [999, 99, 100, 300, 200]
// console.log(sortByName([1, 2, 3, 4])) // [4, 1, 3, 2]
// console.log(sortByName([8, 8, 9, 9, 10, 10])) // [8, 8, 9, 9, 10, 10]
// console.log(sortByName([9, 99, 999])) // => [9, 999, 99]);
// console.log(sortByName([10, 20, 25, 201, 99])) // => [99, 10, 20, 25, 201]
// console.log(sortByName([0, 1, 2, 3])) // => [1, 3, 2, 0] 
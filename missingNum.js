// Missing Numbers 

function findMissingNumber(sequence) {
    var arrStr = sequence.split(" "); // array containing numbers of strings ['1', '2', '3', '5']
    var arrNum = []; // array containing numbers [2, 6, 4, 5, 3]
    var copy = []; // array in ascending order [2, 3, 4, 5, 6]
    for (let i = 0; i < arrStr.length; i++) { // converts strings into numbers array 
        arrNum.push(Number(arrStr[i]));
    }

    for (let i = 0; i < arrNum.length; i++) { // creates a copy of the arrNum without mutating 
        copy.push(arrNum[i]);
    }

    copy.sort(function (a, b) { // sorts the copy array in order 
        return a - b;
    })

    function outOfOrder() {
        for (let i = 0; i < arrNum.length; i++) {
            for (let i = 0; i < copy.length; i++) {
                if (arrNum[i] !== copy[i]) {
                    return true;
                }
            }
        }
    }

    if (arrNum.includes(0)) {
        return 0;
    } else if (arrNum[0] !== 1) {
        return 1;
    } else if (arrNum.includes(NaN)) {
        return 1;
    } else if (outOfOrder()) {
        return 1;
    } else {
        for (let i = 0; i < arrNum.length; i++) {
            if (arrNum[i] + 1 !== arrNum[i + 1]) {
                if (arrNum[i] + 1 > arrNum[arrNum.length - 1]) {
                    return 0;
                }
                return arrNum[i] + 1;
            }
        }
    }

}


console.log(findMissingNumber("1 2 3 5")) // 4
console.log(findMissingNumber("1 3")) // 2
console.log(findMissingNumber("1 5")) // 2
console.log(findMissingNumber("")) // 0
console.log(findMissingNumber("1 2 3 4 5")) // 0
console.log(findMissingNumber("2 3 4 5")) //  1 
console.log(findMissingNumber("2 6 4 5 3")) // 1 
console.log(findMissingNumber("2 1 4 3 a")) // 1
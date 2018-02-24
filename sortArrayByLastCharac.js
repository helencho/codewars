// Sort Array By Last Character 
// https://www.codewars.com/kata/sort-array-by-last-character/javascript 

const sortMe = arr => {
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i]
        let j = i - 1

        // If last character is a number 
        while (j >= 0
            && !isNaN(key.toString()[key.toString().length - 1])
            && parseInt(arr[j].toString()[arr[j].toString().length - 1]) > key.toString()[key.toString().length - 1]) {
            arr[j + 1] = arr[j]
            j--
        }

        // If last character is anything but a number 
        while (j >= 0
            && arr[j].toString()[arr[j].toString().length - 1] > key.toString()[key.toString().length - 1]) {
            arr[j + 1] = arr[j]
            j--
        }

        arr[j + 1] = key
    }

    return arr
}

let arr1 = ['acvd', 'cvv', 'bcc']
let arr2 = ["asdf", 14, "13", "asdf"]
let arr3 = ["xxxf", "aaaf", "kf", "f", "ooooof"]
let arr4 = ["asdf", "asdf", "14", "13"]
let arr5 = ['fjbq90', 216, 'f2ct51', '5m78fe', 'zsurg', '0zfzlm', 'v8g6r', 'eoqcs']

// console.log(sortMe(arr1)) // => ['bcc','acvd']
console.log(sortMe(arr2)) // => ["13", 14, "asdf", "asdf"]
// console.log(sortMe(arr3)) // => ["xxxf","aaaf","kf","f","ooooof"]
// console.log(sortMe(arr4)) // => ["13", "14", "asdf", "asdf"]
console.log(sortMe(arr5)) // => ['fjbq90', 'f2ct51', 216, '5m78fe', 'zsurg', '0zfzlm', 'v8g6r', 'eoqcs']

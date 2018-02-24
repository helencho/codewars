// Sort Array By String Length 
// https://www.codewars.com/kata/sort-array-by-string-length/javascript

const sortByLength = array => {
    // Return an array containing the same strings, ordered from shortest to longest
    for(let i = 0; i < array.length; i++) {
        let key = array[i] 
        let j = i - 1 

        while(j >= 0 && array[j].length > key.length) {
            array[j + 1] = array[j]
            j-- 
        }

        array[j + 1] = key 
    }
    return array 
}


let arr = ["Telescopes", "Glasses", "Eyes", "Monocles"]

console.log(sortByLength(arr)) // => ["Eyes", "Glasses", "Monocles", "Telescopes"]
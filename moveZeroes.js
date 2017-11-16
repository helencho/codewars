var moveZeros = function (arr) {
    var nonZeroes = [];
    var zeroes = [];
    arr.map(function (x) {
        if (x !== 0) {
            nonZeroes.push(x);
        } else {
            zeroes.push(x);
        }
    })
    return nonZeroes.concat(zeroes);
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // return [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ] 
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]))  // returns [false,1,1,2,1,3,"a",0,0]
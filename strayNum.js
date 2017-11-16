// Find the stray number 

function stray(numbers) {
    var loner = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        if (loner !== numbers[i]) {
            if (i === 1) {
                return loner;
            }
            return numbers[i];
        }
    }
}


console.log(stray([1, 1, 2])) // => 2 
console.log(stray([17, 17, 3, 17, 17, 17, 17])) // => 3
console.log(stray([8, 17, 17, 17, 17, 17, 17])) // => 8
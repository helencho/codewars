// Sum of Pairs 
// http://www.codewars.com/kata/sum-of-pairs/train/javascript


// Working code 
// Only problem: too slow 
var sum_pairs = function (ints, s) {
    var pairs = {
        index: [],
        pairs: []
    }

    for (let i = 0; i < ints.length - 1; i++) {
        for (let j = i; j < ints.length; j++) {
            if (ints[i] + ints[j] === s && i !== j) {

                pairs["index"].push(i), pairs["index"].push(j);
                pairs["pairs"].push(ints[i]), pairs["pairs"].push(ints[j]);

            }
        }
    }

    function checkLowestPair() {
        for (let i = pairs["index"].length - 1; i > 1; i -= 2) {
            if (pairs["index"][i] < pairs["index"][i - 2]) {
                return [pairs["pairs"][i - 1], pairs["pairs"][i]];
            }
        }
        return [pairs["pairs"][0], pairs["pairs"][1]];
    }

    // ternary operator 
    return pairs["index"].length >= 2 ? checkLowestPair() : undefined

    // the above does the same as below: 
    // if (pairs["index"].length >= 2) {
    //     return checkLowestPair();
    // } else {
    //     return undefined;
    // }
    // return pairs;

}


console.log(sum_pairs([11, 3, 7, 5], 10)); // 3 7 
console.log(sum_pairs([4, 3, 2, 3, 4], 6)); // 4 2
console.log(sum_pairs([0, 0, -2, 3], 2)); // undefined 
console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10)); // 3 7
console.log(sum_pairs([1, 4, 8, 7, 3, 15], 8)); // [1, 7]
console.log(sum_pairs([1, -2, 3, 0, -6, 1], -6)); // [0, -6]

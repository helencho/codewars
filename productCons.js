// Product of Consecutive Fibonacci Numbers 
// October 9, 2017 


function productFib(prod) {
    var fibArr = [0, 1];
    for (var i = 1; fibArr[fibArr.length - 1] < prod; i++) {
        fibArr.push(fibArr[i] + fibArr[i - 1])
    }
    for (var k = 0; k < fibArr.length; k++) {
        if (fibArr[k] * fibArr[k + 1] === prod) {
            return [fibArr[k], fibArr[k + 1], true];
        } else if (fibArr[k] * fibArr[k + 1] < prod && prod < fibArr[k + 1] * fibArr[k + 2]) {
            return [fibArr[k + 1], fibArr[k + 2], false];
        }
    }
}

console.log(productFib(714))
// # should return [21, 34, true]

console.log(productFib(800))
  // # should return [34, 55, false]

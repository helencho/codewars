// Everything is Even 
// https://www.codewars.com/kata/everything-is-even/train/javascript

function ensureEven(n) {
    if (n >= 1 && n % 2 !== 0) {
        return Math.floor(n + 1);
    } else if (n <= -1 && n % 2 !== 0) {
        return Math.ceil(n - 1);
    } else {
        return 0;
    }
}

console.log(ensureEven(1)); // 2
console.log(ensureEven(0.9)); // 0
console.log(ensureEven(-1)); // -2
console.log(ensureEven(-0.5)); // 0
console.log(ensureEven(3.5)); // 4
console.log(ensureEven(-3.5)); // -4
console.log(ensureEven(9.25)); // 10
console.log(ensureEven(-1)); // -2 



// Rotate 13 

function rot13(str) {
    // contains character code of string 
    var toCode = [];

    // loops through string and converts every character to code 
    for (let i = 0; i < str.length; i++) {
        toCode.push(str[i].charCodeAt());
    }

    // shifts character code 13 places 
    function switcheroo(val) {
        if (val >= 110) {
            return val - 13;
        } else if (val >= 97) {
            return val + 13;
        } else if (val >= 77) {
            return val - 13;
        } else if (val >= 65) {
            return val + 13;
        } else {
            return val;
        }
    }

    // contains shifted character code 
    var shifted = toCode.map((x) => {
        return switcheroo(x);
    })

    // loops through converted character codes and converts to alphabet 
    var converted = shifted.map((x) => {
        return String.fromCharCode(x);
    })

    return converted.join("");

}


console.log(rot("test")); // => grfg 
console.log(rot("Test")); // => Grfg
console.log(rot("algorithm is cool"));




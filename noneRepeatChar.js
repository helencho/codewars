function firstNonRepeatingLetter(s) {
    for (let i = 0; i < s.length; i++) {
        var beginning = s.slice(0, i).toLowerCase();
        var rest = s.slice(i + 1).toLowerCase();
        var current = s[i];
        if (!beginning.includes(current.toLowerCase()) && !rest.includes(current.toLowerCase())) {
            return s[i];
        }
    }
    return "";
}

console.log(firstNonRepeatingLetter('a')) // 'a'
console.log(firstNonRepeatingLetter('STresS')) // 't'
console.log(firstNonRepeatingLetter('Moonmen')) // 'e'

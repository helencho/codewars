function toCamelCase(str) {

    var splitted = str.includes("_") ? str.split(/_/g) : str.split(/\W/g);
    var ans = [];
    for (let i = 0; i < splitted.length; i++) {
        if (i > 0) {
            var upper = splitted[i][0].toUpperCase();
            ans.push(upper + splitted[i].slice(1));
        } else {
            ans.push(splitted[i])
        }
    }

    return ans.join("");
}


console.log(toCamelCase('')) //  '' 
console.log(toCamelCase("the_stealth_warrior")) // "theStealthWarrior" 
console.log(toCamelCase("The-Stealth-Warrior")) //  "TheStealthWarrior" 
console.log(toCamelCase("A-B-C")) // "ABC" 

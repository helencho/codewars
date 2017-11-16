function list(names) {
    var ans = [];
    var last = [];
    for (let i = 0; i < names.length; i++) {
        if (names.length > 1) {
            i === names.length - 1 ? last.push(names[i].name) : ans.push(names[i].name); 
        } else {
            ans.push(names[i].name);
        }
    }

    var final = last.length === 0 ? ans.join(", ") : ans.join(", ") + " & " + last.join("");

    return final;
}

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]))
// returns 'Bart, Lisa & Maggie'

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]))
// returns 'Bart & Lisa'

console.log(list([{ name: 'Bart' }]))
// returns 'Bart'

console.log(list([]))
// returns ''
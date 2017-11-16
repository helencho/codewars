// Where My Anagrams At? 

function anagrams(word, words) {
    var wordSort = word.split("").sort().join("");
    var ans = [];
    for (let i = 0; i < words.length; i++) {
        var checkThis = words[i].split("").sort().join("");
        if (wordSort === checkThis) {
            ans.push(words[i]);
        }
    }
    return ans;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) //  => ['aabb', 'bbaa']

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])) // => ['carer', 'racer']

console.log(anagrams('laser', ['lazing', 'lazy', 'lacer'])) //  => []
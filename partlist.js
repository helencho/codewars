// Part List 

function partlist(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length - 1; i++) {
        newArr.push([]);
    }
    for (var k = 0; k < newArr.length; k++) {
        newArr[k].push(arr.slice(0, k + 1).join(" "));
        newArr[k].push(arr.slice(k + 1).join(" "));
    }
    return newArr;
}






console.log(partlist(["I", "wish", "I", "hadn't", "come"]))
// [["I", "wish I hadn't come"], ["I wish", "I hadn't come"],
// ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]])
// if there's 5 items, becomes 4 arrays


console.log(partlist(["cdIw", "tzIy", "xDu", "rThG"]))
// [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]])
// if there's 4 items, becomes 3 arrays 


console.log(partlist(["vJQ", "anj", "mQDq", "sOZ"]))
  // [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]])
  // if there's 4 items, becomes 3 arrays 
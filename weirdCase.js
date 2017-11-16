// Weird Case 
// October 9, 2017 


function toWeirdCase(string) {
  var strArr = string.split(" ");
  var wordArr = string.split("");
  var weird = [];

  function everyOther(word) {

    for (var i = 0; i < word.length; i++) {
      if (i % 2 === 0) {
        weird.push(word[i].toUpperCase());
      } else if (i % 2 === 1) {
        weird.push(word[i].toLowerCase());
      }
    }
  }
  for (var j = 0; j < strArr.length; j++) {
    everyOther(strArr[j]);
    weird.push(" ");
  }
  return weird.join("");
}

console.log(toWeirdCase("string"));
console.log(toWeirdCase("escape the room"));
console.log(toWeirdCase("looks like you passed")); // => "LoOkS LiKe YoU PaSsEd"
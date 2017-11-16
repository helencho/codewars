// Codewars Exercise
// Output Middle Letters

function getMiddle(a) {
  var str = a;
  // if length is odd return middle character
  if (str.length%2 === 1) {
    var middleOne = str[(str.length-1)/2];
    return middleOne;
  } else {
  // if length is even return middle 2 characters
    var middleTwo = str[(str.length/2)-1]+str[str.length/2];
    return middleTwo;
  }
}
getMiddle("test");
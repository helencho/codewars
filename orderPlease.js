// Your task is to sort a given string. 
// Each word in the String will contain a single number. 
// This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input String is empty, return an empty String. 
// The words in the input String will only contain valid consecutive numbers.

function order(words){
    var wordsArray = words.split(" ");
    var orderArr = [];
    if (words === "") {
      return "";
    }
    
    for (var i = 1; i <= wordsArray.length; i++) {
      for (var j = 0; j < wordsArray.length; j++) {
        if (wordsArray[j].includes(i)) {
          orderArr.push(wordsArray[j]);
        }
      }
    }
    
    return orderArr.join(" ");
    
  }
  
  console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
  console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // "Fo1r the2 g3ood 4of th5e pe6ople"
  console.log(order("")); // ""
  
  
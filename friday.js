// Friday the Thirteenth 

function fridayTheThirteenths(start, end) {
    var ans = [];

    if (end === undefined) {
        let alpha = new Date(start, 0, 1);
        let omega = new Date(start, 11, 31);
        let checker = new Date(start, 0, 1);

        while (checker < omega) {
            if (checker.getDate() === 13 && checker.getDay() === 5) {
                var d = checker.getDate();
                var m = checker.getMonth() + 1;
                var y = checker.getFullYear();
                ans.push(m + "/" + d + "/" + y);
            }
            checker.setDate(checker.getDate() + 1);
        }
    } else {
        let alpha = new Date(start, 0, 1);
        let omega = new Date(end, 11, 31);
        let checker = new Date(start, 0, 1);

        while (checker < omega) {
            if (checker.getDate() === 13 && checker.getDay() === 5) {
                var d = checker.getDate();
                var m = checker.getMonth() + 1;
                var y = checker.getFullYear();
                ans.push(m + "/" + d + "/" + y);
            }
            checker.setDate(checker.getDate() + 1);
        }
    }
    return ans.join(" ");
}

console.log(fridayTheThirteenths(1999, 2000));
console.log(fridayTheThirteenths(2014, 2015));
console.log(fridayTheThirteenths(2000));







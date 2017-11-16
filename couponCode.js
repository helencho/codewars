// Coupon Code 

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    var now = new Date(currentDate);
    var expire = new Date(expirationDate);
    if (enteredCode !== correctCode) {
        return false;
    } else if (Number(now) > Number(expire)) {
        return false;
    } else {
        return true;
    }
}
console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014')) // true 
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014')) //  false 
console.log(checkCoupon('123', '123', 'January 1, 2014', 'January 2, 2014')) // true 
console.log(checkCoupon('123', '123', 'December 5, 2014', 'January 1, 2014')) //  false 
console.log(checkCoupon('123', '123', 'December 25, 2014', 'December 1, 2013')) //  false 

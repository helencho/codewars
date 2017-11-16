// String like Char
// Add the methods to String.prototype
// https://www.codewars.com/kata/53dab6cece5f44b8ee00035d

String.prototype.map = function (callback) {
    var strArr = this.split("");
    var ans = [];
    for (let i = 0; i < strArr.length; i++) {
        ans.push(callback(strArr[i]));
    }
    return ans.join("");
}

String.prototype.join = function (arg) {
    var strArr = this.split("");
    return strArr.join(arg);

}

String.prototype.filter = function (callback) {
    var strArr = this.split("");
    var ans = [];
    for (let i = 0; i < strArr.length; i++) {
        if (callback(strArr[i])) {
            ans.push(strArr[i]);
        }
    }
    return ans.join("");
}

String.prototype.forEach = function (callback) {
    var strArr = this.split("");
    var ans = [];
    return strArr.forEach(callback);
}

String.prototype.some = function (callback) {
    var strArr = this.split("");
    return strArr.some(callback)

}

String.prototype.every = function (callback) {
    var strArr = this.split("");
    return strArr.every(callback);
}

String.prototype.reduce = function (callback) {
    var strArr = this.split("");
    var ans = strArr.reduce(function (a, x, i) {
        return callback(a, x, i);
    }, 0)
    return ans;
}

String.prototype.reduceRight = function (callback) {
    var strArr = this.split("");
    var ans = strArr.reduceRight(function (preval, curval, index) {
        return callback(preval, curval, index);
    }, [])
    return ans.join("");
}

String.prototype.sort = function () {
    var strArr = this.split("");
    return strArr.sort().join("");
}

String.prototype.reverse = function () {
    var strArr = this.split("");
    return strArr.reverse().join("");

}

String.prototype.push = function (p) {
    var strArr = this.split("");
    strArr.push(p);
    return strArr.join("");
}

String.prototype.pop = function () {
    var strArr = this.split("");
    strArr.pop();
    return strArr.join("");
}

String.prototype.shift = function () {
    var strArr = this.split("");
    strArr.shift();
    return strArr.join("");
}

String.prototype.unshift = function (p) {
    var strArr = this.split("");
    strArr.unshift(p);
    return strArr.join("");
}

String.prototype.splice = function (i, alpha, omega) {
    var strArr = this.split("");
    strArr.splice(i, alpha, omega);
    return strArr.join("");
}



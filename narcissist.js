function narcissistic(value) {
    var stringVal = value.toString();
    var length = stringVal.length;
    var sum = 0;

    for (let i = 0; i < stringVal.length; i++) {
        sum += Math.pow(parseInt(stringVal[i]), parseInt(length));
    }
    return sum === value ? true : false;

}

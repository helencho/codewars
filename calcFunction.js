// Calculating with Functions 

function zero(operate) {
    if (operate === undefined) {
        return 0;
    } else {
        var parts = operate;
        if (parts[0] === "plus") {
            return 0 + parts[1];
        } else if (parts[0] === "minus") {
            return 0 - parts[1];
        } else if (parts[0] === "times") {
            return 0 * parts[1];
        } else if (parts[0] === "divide") {
            return 0 / parts[1];
        }
    }
}

function one(operate) {
    if (operate === undefined) {
        return 1;
    } else {
        var parts = operate;
        if (parts[0] === "plus") {
            return 1 + parts[1];
        } else if (parts[0] === "minus") {
            return 1 - parts[1];
        } else if (parts[0] === "times") {
            return 1 * parts[1];
        } else if (parts[0] === "divide") {
            return 1 / parts[1];
        }
    }
}

function two(operate) {
    if (operate === undefined) {
        return 2;
    } else {
        var parts = operate;
        if (parts[0] === "plus") {
            return 2 + parts[1];
        } else if (parts[0] === "minus") {
            return 2 - parts[1];
        } else if (parts[0] === "times") {
            return 2 * parts[1];
        } else if (parts[0] === "divide") {
            return 2 / parts[1];
        }
    }
}

function three(operate) {
    if (operate === undefined) {
        return 3;
    } else {
        var parts = operate;
        if (parts[0] === "plus") {
            return 3 + parts[1];
        } else if (parts[0] === "minus") {
            return 3 - parts[1];
        } else if (parts[0] === "times") {
            return 3 * parts[1];
        } else if (parts[0] === "divide") {
            return 3 / parts[1];
        }
    }
}

function four(operate) {
    if (operate === undefined) {
        return 4;
    } else {
        var parts = operate;
        if (parts[0] === "plus") {
            return 4 + parts[1];
        } else if (parts[0] === "minus") {
            return 4 - parts[1];
        } else if (parts[0] === "times") {
            return 4 * parts[1];
        } else if (parts[0] === "divide") {
            return 4 / parts[1];
        }
    }
}

function five(operate) {
    if (operate === undefined) {
        return 5;
    } else {
        var parts = operate;
        if (parts[0] === "plus") {
            return 5 + parts[1];
        } else if (parts[0] === "minus") {
            return 5 - parts[1];
        } else if (parts[0] === "times") {
            return 5 * parts[1];
        } else if (parts[0] === "divide") {
            return 5 / parts[1];
        }
    }
}

function six(operate) {
    if (operate === undefined) {
        return 6;
    } else {
        var parts = operate;
        if (parts[0] === "plus") {
            return 6 + parts[1];
        } else if (parts[0] === "minus") {
            return 6 - parts[1];
        } else if (parts[0] === "times") {
            return 6 * parts[1];
        } else if (parts[0] === "divide") {
            return 6 / parts[1];
        }
    }
}

function seven(operate) {
    if (operate === undefined) {
        return 7;
    } else {
        var parts = operate;
        if (parts[0] === "plus") {
            return 7 + parts[1];
        } else if (parts[0] === "minus") {
            return 7 - parts[1];
        } else if (parts[0] === "times") {
            return 7 * parts[1];
        } else if (parts[0] === "divide") {
            return 7 / parts[1];
        }
    }
}

function eight(operate) {
    if (operate === undefined) {
        return 8;
    } else {
        var parts = operate;
        if (parts[0] === "plus") {
            return 8 + parts[1];
        } else if (parts[0] === "minus") {
            return 8 - parts[1];
        } else if (parts[0] === "times") {
            return 8 * parts[1];
        } else if (parts[0] === "divide") {
            return 8 / parts[1];
        }
    }
}

function nine(operate) {
    if (operate === undefined) {
        return 9;
    } else {
        var parts = operate;
        if (parts[0] === "plus") {
            return 9 + parts[1];
        } else if (parts[0] === "minus") {
            return 9 - parts[1];
        } else if (parts[0] === "times") {
            return 9 * parts[1];
        } else if (parts[0] === "divide") {
            return 9 / parts[1];
        }
    }
}


function plus(num) {
    return ["plus", num];
}

function minus(num) {
    return ["minus", num]
}

function times(num) {
    return ["times", num]
}

function dividedBy(num) {
    return ["divide", num]
}


console.log(two(times(four())))
console.log(nine(plus(nine())))
console.log(six(dividedBy(two())))


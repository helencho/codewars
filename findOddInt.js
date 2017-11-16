// October 5, 2017 
function findOdd(A) {
    var array2 = [];
    var obj = {};

    A.map(function (x) {
        if (!array2.includes(x)) {
            array2.push(x)
        }
    })

    array2.map(function (x) {
        obj[x] = 0;
    })

    for (var i = 0; i < A.length; i++) {
        for (var x in obj) {
            if (Number(x) === Number(A[i])) {
                obj[x] += 1;
            }
        }
    }

    for (var k in obj) {
        if (obj[k] % 2 === 1) {
            return Number(k);
        }
    }
}

console.log(findOdd([1, 1, 1, 5, 1, 1, 1]))

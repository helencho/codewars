// Pete the Baker 

function cakes(recipe, available) {
    var result = [];

    for (var k in recipe) {
        var need = recipe[k] || 0;
        var have = available[k] || 0;

        if (need > 0) {
            result.push(Math.floor(have / need))
        }
    }


    return result.sort(function (a, b) {
        return a - b;
    })[0];


}

// must return 2
console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }))

// must return 0
console.log(cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 }))

// must return 11 
console.log(cakes({ "cream": 200, "flour": 300, "sugar": 150, "milk": 100, "oil": 100 }, { "sugar": 1700, "flour": 20000, "milk": 20000, "oil": 30000, "cream": 5000 }))

// must return 0 
// console.log(cakes({"chocolate":33,"eggs":63,"oil":46}, {"milk":8700,"flour":4100,"cocoa":6100,"eggs":7900,"pears":8100,"sugar":0,"apples":9500,"crumbles":6200,"butter":3000,"cream":8300,"chocolate":6600,"nuts":7600,"oil":9600})) 

// must return 0 
console.log(cakes({ "apples": 26, "chocolate": 14, "flour": 5 }, { "apples": 5300, "sugar": 1900, "flour": 8600, "eggs": 7400, "crumbles": 1300, "butter": 7800, "cream": 6100, "chocolate": 4900, "nuts": 4600, "milk": 6200, "oil": 9300, "cocoa": 2200, "pears": 6500 }))


// Deep comparison of objects 
// https://www.codewars.com/kata/deep-comparison-of-objects/train/javascript

function deepCompare(o1, o2) {

    // run a loop through the first obejct 
    for (var k in o1) {

        // check if first object's property is defined 
        if (typeof o1[k] === "undefined") {
            return false;
        }

        // check if first object's nth property is the same as second object's nth property 
        if (o1.hasOwnProperty(k) !== o2.hasOwnProperty(k)) {
            return false;
        }

        // check if type of property is an object 
        if (typeof o1[k] === "object") {

            if (typeof o2[k] !== "object") {
                return false;

                // check if second object's property is defined 
            } else if (typeof o2[k] === "undefined" || typeof o2[k] === "null") {
                return false;

                // check if first object's length is greater than 1 
            } else if (o1[k].length > 1) {

                // check if first and second object's lengths are equal to each other 
                if (o1[k].length !== o2[k].length) {
                    return false;

                } else {

                    // run a loop through first object's property 
                    for (let i = 0; i < o1[k].length; i++) {

                        // check if first and second object's properties' properties are equal to each other 
                        if (o1[k][i] !== o2[k][i]) {
                            return false;
                        }
                    }
                }
            }

            // check if type of property is a function 
        } else if (typeof o1[k] === "function") {
            // convert function to string, eliminate line breaks and space characters 
            o1[k] = o1[k].toString().replace(/\n/g, "").replace(/\s/g, "");
            o2[k] = o2[k].toString().replace(/\n/g, "").replace(/\s/g, "");

            //compare functions 
            if (o1[k] !== o2[k]) {
                return false;
            }

            // check if values are the same 
        } else {
            if (o1[k] !== o2[k]) {
                return false;
            }
        }
    }

    for (var p in o2) {
        if (typeof o2[p] !== undefined) {
            return false;
        }
    }

    return true;
}

var obj1 = { name: 'Joe', age: 10 };
var obj2 = { name: 'Joe', age: 10 };
var obj3 = { name: 'Helen', age: [10, 11, 12] };
var obj4 = { name: 'Helen', age: [10, 11, 10] };
var obj5 = { add: function () { return "hi"; } };
var obj6 = { add: function () { return "hi"; } };
var obj7 = { name: 'Helen', age: [1, 2, 3] };
var obj8 = { age: [1, 2, 3], name: 'Helen' };
var obj9 = {};
var obj10 = {};
var obj11 = { age: 12345 }
var obj12 = { age: 12345 }

// console.log(deepCompare(obj1, obj2)); // => true 
// console.log(deepCompare(obj3, obj4)); // => false 
// console.log(deepCompare(obj5, obj6)); // => true 
// console.log(deepCompare(obj7, obj8)); // => true  
// console.log(deepCompare(obj9, obj10));
console.log(deepCompare(obj11, obj12)) // => false





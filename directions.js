// Directions Reductions 
// October 10, 2017 

function dirReduc(arr) {
    var xycoord = {
        north: 0,
        south: 0,
        east: 0,
        west: 0
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "NORTH") {
            xycoord.north += 1;
        } else if (arr[i] === "SOUTH") {
            xycoord.south += 1;
        } else if (arr[i] === "EAST") {
            xycoord.east += 1;
        } else if (arr[i] === "WEST") {
            xycoord.west += 1;
        }
    }

    // console.log(xycoord)
    var ans = [];
    var diff;

    if (xycoord.north === 1 && xycoord.south === 1 &&
        xycoord.east === 1 && xycoord.west === 1) {
        return arr;
    } else if (xycoord.west > xycoord.east) {
        diff = xycoord.west - xycoord.east;
        for (let i = 0; i < diff; i++) {
            ans.push("WEST");
        }
        // return ans;
    } else if (xycoord.east > xycoord.west) {
        diff = xycoord.east - xycoord.west;
        for (let i = 0; i < diff; i++) {
            ans.push("EAST");
        }
        // return ans;
    } else if (xycoord.north > xycoord.south) {
        diff = xycoord.north - xycoord.south;
        for (let i = 0; i < diff; i++) {
            ans.push("NORTH");
        }
        // return ans;
    } else if (xycoord.south > xycoord.north) {
        diff = xycoord.south - xycoord.north;
        for (let i = 0; i < diff; i++) {
            ans.push("SOUTH");
        }
        // return ans;
    } else if (xycoord.north === xycoord.south && xycoord.east === xycoord.west) {
        return ans;
    }
    return ans;
}

console.log(dirReduc(["EAST", "EAST", "NORTH", "NORTH", "WEST", "SOUTH"]))
// []

console.log(dirReduc(["NORTH", "EAST", "SOUTH", "WEST", "SOUTH", "SOUTH", "SOUTH"]))
// ["SOUTH", "SOUTH", "SOUTH"]

console.log(dirReduc(["NORTH", "NORTH", "SOUTH", "SOUTH", "EAST", "EAST", "WEST"]))
// ["EAST"]
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))
// ["WEST"]
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]))
// ["NORTH", "WEST", "SOUTH", "EAST"]
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]))
  //  []



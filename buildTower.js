// Tower Builder 
// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

function towerBuilder(nFloors) {
    var floors = [];
    var maxStars = (nFloors * 2) - 1;
    var stars = "";

    for (let i = 0; i < maxStars; i++) {
        stars += "*";
    }
    floors.push(stars);

    var j = 0;
    while (floors.length < nFloors) {
        let starsOnFloor = floors[j].replace(/\*/, " ").split("").reverse().join("").replace(/\*/, " ");
        floors.push(starsOnFloor);
        j++;
    }

    var ans = [];
    for (let x = floors.length-1; x > -1; x--) {
        ans.push(floors[x])
    }
    return ans;
}


console.log(towerBuilder(6))


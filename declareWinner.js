// Declare Winner 
// October 9, 2017 


function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function () { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    var currentFighter;

    if (firstAttacker === fighter1.name) {
        currentFighter = fighter1;
    } else {
        currentFighter = fighter2;
    }

    function switcheroo() {
        if (currentFighter === fighter1) {
            currentFighter = fighter2;
        } else if (currentFighter === fighter2) {
            currentFighter = fighter1;
        }
    }

    function attack() {
        var health;
        if (currentFighter === fighter1) {
            health = fighter2.health - fighter1.damagePerAttack
            fighter2.health = health
        } else if (currentFighter === fighter2) {
            health = fighter1.health - fighter2.damagePerAttack
            fighter1.health = health
        }
    }

    while (currentFighter.health > 0) {
        attack();
        switcheroo();
    }

    switcheroo();
    // console.log(currentFighter.name);
    return currentFighter.name;

}

declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew") // => "Lew"
declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry") // => "Harald"
declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry") // => "Harry"
declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry") // => "Harald"

  // calling attack() 
  // calling switcheroo() 
  // while current fighter's health is greater than -1 
  // current fighter      current fighter health        other fighter     other fighter H - current fighter D    switch fighter       current fighter health > -1? 
  // Jerry                30                            Harold            20 - 3 = 17 (Harold)                    Harold                Yes 
  // Harold               17                            Jerry             30 - 5 = 25 (Jerry)                     Jerry                 Yes 
  // Jerry                25                            Harold            17 - 3 = 14 (Harold)                    Harold                Yes 
  // Harold               14                            Jerry             25 - 5 = 20 (Jerry)                     Jerry                 Yes 
  // Jerry                20                            Harold            14 - 3 = 11 (Harold)                    Harold                Yes 
  // Harold               11                            Jerry             20 - 5 = 15 (Jerry)                     Jerry                 Yes 
  // Jerry                15                            Harold            11 - 3 = 8 (Harold)                     Harold                Yes 
  // Harold               8                             Jerry             15 - 5 = 10 (Jerry)                     Jerry                 Yes 
  // Jerry                10                            Harold            8 - 3 = 5 (Harold)                      Harold                Yes 
  // Harold               5                             Jerry             10 - 5 = 5 (Jerry)                      Jerry                 Yes 
  // Jerry                5                             Harold            5 - 3 = 2 (Harold)                      Harold                Yes 
  // Harold               2                             Jerry             5 - 5 = 0 (Jerry)                       Jerry                 Yes 
  // Jerry                5                             Harold            2 - 3 = -1 (Harold)                     Harold                NO  => Jerry won 



























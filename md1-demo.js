let jonSnowAttack = 25;
let jaimeLannisterAttack = 35;

if (jonSnowAttack > jaimeLannisterAttack) {
    console.log("Jon has better attack than Jaime");
} else if (jaimeLannisterAttack > jonSnowAttack) {
    console.log("Jaime has better attack than Jon");
} else {
    console.log("Both have the same attack level");
}

let jonSnowHealth = 100;
let jonSnowDefense = 0;

if (jonSnowHealth <= jaimeLannisterAttack) {
    console.log("Jon has been slain")
} else {
    jonSnowHealth -= jaimeLannisterAttack
    console.log("Jon's health is down to " + jonSnowHealth);
}

let coinLandsHead = false;

if (coinLandsHead === true) {
    console.log("The fight continues");
} else {
    console.log("Jon is allowed to run away")
}

// for(let i = 0; i < 5; i++) {
//     if (jonSnowHealth <= 0) {
//         console.log("Jon has been slain")
//     } else {
// jonSnowHealth -= jaimeLannisterAttack; 
// console.log(`Jon's health is ${jonSnowHealth}`);
//     }
// }

while(jonSnowHealth > 0) {
jonSnowHealth = jonSnowHealth - jaimeLannisterAttack //this is the incrementation
//same as jonSnowHealth -= jaimeLannisterAttack
//if (jonSnowHealth <= 0) {
  //  jonSnowHealth = 0;
//}
console.log("Jon's health is " + jonSnowHealth);
if (jonSnowHealth <= 0) {
    console.log("Jon has been slain.")
}
}
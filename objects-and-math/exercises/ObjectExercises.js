let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   astronautID: 1,
   mass: 9,
   age: 6,
   move: function () {return Math.round(Math.random()*10)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   astronautID: 1,
   mass: 11,
   age: 6,
   move: function () {return Math.round(Math.random()*10)}
};

let wonderDog = {
   name: "Leroy",
   species: "Beagle",
   astronautID: 1,
   mass: 14,
   age: 5,
   move: function () {return Math.round(Math.random()*10)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   astronautID: 1,
   mass: 0.1,
   age: 5,
   move: function () {return Math.round(Math.random()*10)}
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   astronautID: 1,
   mass: 0.0000000001,
   age: 1,
   move: function() {return Math.round(Math.random()*10)}
};

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.
let crew = [superChimpOne, superChimpTwo, wonderDog, salamander, tardigrade];

// Print out the relevant information about each animal.
function crewReports(object) {
   return `${object.name} is a ${object.species}. They are ${object.age} years old and ${object.mass} kilograms. Thier ID is ${object.astronautID}.`;
};

// for (let i = 0; i < crew.length; i++) {
//    console.log(crewReports(crew[i]));
// }

// Start an animal race!

function fitnessTest(arr) {
   let results = [], numSteps, turns;
   for (let i = 0; i < arr.length; i++){
      numSteps = 0;
      turns = 0;
      while(numSteps < 20){
      numSteps += arr[i].move();
//    console.log(numSteps);
      turns++;
      }
   results.push(`${arr[i].name} took ${turns} turns to take 20 steps.`);
 }
 return results;
}

console.log(fitnessTest(crew));
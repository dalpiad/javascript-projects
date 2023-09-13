// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

let launchReady1 = false;
let launchReady2 = false;
let fuelLevel = 1000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady1 = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady1 = false;
}

// console.log("launchReady1 = ", launchReady1);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady2 = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady2 = false;
}

// console.log("launchReady2 = ", launchReady2);

if (launchReady1 && launchReady2) {
   console.log("10, 9, 8...");
   console.log("Fed parrot...");
   console.log("6, 5, 4...");
   console.log("Ignition...");
   console.log("3, 2, 1...");
   console.log("Liftoff!");
} else {
   console.log("Launch scrubbed.");
}
//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');

let startingFuel = 0;
let astronautsOnboard = 0;
let shuttleAltitude = 0;

// Exercise #4: Construct while loops to do the following:
//  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000.

startingFuel = Number(input.question("Enter the starting fuel of the shuttle. \n Amount must be more than 5000 and less than 30000.  "));
while (startingFuel >= 30000 || startingFuel <= 5000) {
  startingFuel = Number(input.question("Enter the starting fuel of the shuttle. \n Amount MUST be MORE THAN 5000 and LESS THAN 30000.  "));

}


//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

astronautsOnboard = Number(input.question("Enter the number of astronauts onboard. \n Amount must be more than 0 and no more than 7.  "));
while (astronautsOnboard <= 0 || astronautsOnboard >= 8) {
  astronautsOnboard = Number(input.question("Enter the number of astronauts onboard. \n Amount MUST be MORE than 0 and NO MORE THAN 7.  "));
}
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (startingFuel >= 100) {
  startingFuel = startingFuel - (100 * astronautsOnboard);
  shuttleAltitude = shuttleAltitude + 50;
}

// Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”
console.log(`The shuttle gained an altitude of ${shuttleAltitude} km.`);

// If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”
if (shuttleAltitude >= 2000) {
  console.log("Orbit achieved!");
} else {
  console.log("Failed to reach orbit.");
}
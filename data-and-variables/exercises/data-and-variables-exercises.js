// Declare and assign the variables below

let shuttleName = 'Determination';

let shuttleSpeed = 17500;
//Number(shuttleSpeed);

let distanceMarsKM = 225000000;
//Number(distanceMarsKM);

let distanceMoonKM = 384400;
//Number(distanceMoonKM);

const milesPerKM = 0.621
//Number(milesPerKM);

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);

console.log(typeof shuttleSpeed);

console.log(typeof distanceMarsKM);

console.log(typeof distanceMoonKM);

console.log(typeof milesPerKM);

// Calculate a space mission below

let distanceMarsMiles = (distanceMarsKM * milesPerKM);

let timeToMarsHours = distanceMarsMiles / shuttleSpeed;

let timeToMarsDays = timeToMarsHours / 24;

// Print the results of the space mission calculations below.

console.log('The Space Shuttle', shuttleName, 'will take', Math.floor(timeToMarsDays), 'days, and', Math.floor(timeToMarsHours % 24), 'hours, and', Math.round((timeToMarsHours % 24) % 60), 'minutes, to travel to Mars.');

// Calculate a trip to the moon below

let distanceMoonMiles = (distanceMoonKM * milesPerKM);

let timeToMoonHours = distanceMoonMiles / shuttleSpeed;

let timeToMoonDays = timeToMoonHours / 24;

// Print the results of the trip to the moon below

console.log('The Space Shuttle', shuttleName, 'will take', Math.floor(timeToMoonHours % 24), 'hours and', Math.round((timeToMoonHours % 24) % 60), 'minutes, to travel to the Moon.');
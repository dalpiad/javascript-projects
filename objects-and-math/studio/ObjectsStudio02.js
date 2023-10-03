// Code your orbitCircumference function here:
function orbitCircumference(alt) {
  radiusOfEarthAtEquator = 6378;
  return (Math.round(2*(radiusOfEarthAtEquator+alt)*Math.PI));
}

console.log(orbitCircumference(2000));

// Code your missionDuration function here:
function missionDurationLog(numOrbits, orbitRadius = 2000, obitalSpeed = 28000) {
  let timeRoundedtoTwo = Math.round(((numOrbits*orbitCircumference(orbitRadius))/obitalSpeed)*100)/100;
  return `The mission will travel ${numOrbits*orbitCircumference(orbitRadius)}km around the planet, and it will take ${timeRoundedtoTwo} hours to complete.`; 
}

console.log(missionDurationLog(6));

function missionDuration(numOrbits, orbitRadius = 2000, obitalSpeed = 28000) {
  let timeRoundedtoTwo = Math.round(((numOrbits*orbitCircumference(orbitRadius))/obitalSpeed)*100)/100;
  return timeRoundedtoTwo; 
}


// Copy/paste your selectRandomEntry function here:


// Code your oxygenExpended function here:
function oxygenExpended(candidate, numOrbits, orbitRadius = 2000, obitalSpeed = 28000) {
  let o2RoundedtoThree = Math.round((candidate.o2Used(missionDuration(numOrbits, orbitRadius, obitalSpeed)))*1000)/1000;
  return `${candidate.name} will perform the spacewalk, which will last ${missionDuration(numOrbits)} hours and require ${o2RoundedtoThree}kg of oxygen.`
}



// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
 
 function selectRandomCandidate(candidateArray) {
  return candidateArray[(Math.floor(Math.random()*candidateArray.length))];
}

 console.log(oxygenExpended(selectRandomCandidate(crew), 5));
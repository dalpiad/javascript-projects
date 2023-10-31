// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    const takeOffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const rocket = document.getElementById("rocket");
    
    takeOffButton.addEventListener('click', event => {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(response == true) {
           flightStatus.innerHTML = 'Shuttle in flight.';
           document.getElementById("shuttleBackground").style.backgroundColor = "blue";
           shuttleHeight.innerHTML = 10000;
        };
     });

     landButton.addEventListener('click', event => {
        let response = window.confirm("ConfirThe shuttle is landing. Landing gear engaged.");
        if(response == true) {
           flightStatus.innerHTML = 'The shuttle has landed.';
           document.getElementById("shuttleBackground").style.backgroundColor = "green";
           shuttleHeight.innerHTML = 0;
        };
     });

     abortButton.addEventListener('click', event => {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if(response == true) {
           flightStatus.innerHTML = 'Mission aborted.';
           document.getElementById("shuttleBackground").style.backgroundColor = "green";
           shuttleHeight.innerHTML = 0;
        };
     });

      rocket.style.position = 'absolute';
      rocket.style.bottom = 0;
      //rocket.style.left = '250px';

     upButton.addEventListener('click', event => {
           shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
           rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + 'px';
     });

     downButton.addEventListener('click', event => {
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
        rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + 'px';
  });



});















function launchOutput(num) {
if (num % 2 === 0) {
    if (num % 3 === 0) {
        if (num % 5 === 0) {
            return "LaunchCode Rocks!";
        }
        return "LaunchCode!";
    }
    if (num % 5 === 0) {
        return "Launch Rocks! (CRASH!!!!)";
    }
    return "Launch!";
}
if (num % 3 === 0) {
    if (num % 5 === 0) {
        return "Code Rocks!";
    }
    return "Code!";
}
if (num % 5 === 0) {
    return "Rocks!";
}

    /*
if divisible by 2
    if divisible 3
        if divisible by 5
        return
    return
    if divisible by 5
    return
if divisible by 3
    if divisible by 5
    return
return
if divisible by 5
return
else return
*/
    return "Rutabagas! That doesn't work.";
}

let launchcode = {
    organizaion: 'nonprofit',
    executiveDirector: 'Jeff',
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput: launchOutput
}



module.exports = launchcode;


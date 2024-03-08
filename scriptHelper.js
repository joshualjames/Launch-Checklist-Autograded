// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
    const missionDiv = document.getElementById("missionTarget");
    missionDiv.innerHTML = `
             <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${image}">
             `;
    // Here is the HTML formatting for our mission target div.

}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        console.log(testInput)
        return "Not a Number";
    } else if (isNaN(testInput) === false) {
        return "Is a Number";
    } else {
        return "Is a String"
    };

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const listUpdate = document.getElementById(list);
    console.log(listUpdate.style);
    const pilotUpdate = document.getElementById("pilotStatus");
    pilotUpdate.innerHTML = `<li value=1>Pilot ${pilot} Ready</li>`;
    const copilotUpdate = document.getElementById("copilotStatus");
    copilotUpdate.innerHTML = `<li value=2>Copilot ${copilot} Ready</li>`;
    const fuelLevelUpdate = document.getElementById("fuelStatus");
    const launchStatusUpdate = document.getElementById("launchStatus");
    const cargoStatusUpdate = document.getElementById("cargoStatus");
    if (Number(fuelLevel) < 10000 && Number(cargoLevel) < 10000) {

        listUpdate.style.visibility = "visible"
        console.log(listUpdate);
        fuelLevelUpdate.innerHTML = `<li style=color:red value=3>Fuel level too low for launch.</li>`
        console.log(fuelLevelUpdate);
        cargoStatusUpdate.innerHTML = `<li value=4>Cargo mass low enough for launch.</li>`
        launchStatusUpdate.innerHTML = `<h2 style=color:red>Shuttle not ready for launch</h2>`
        event.preventDefault();
    } else if (Number(fuelLevel) > 10000 && Number(cargoLevel) > 10000) {
        listUpdate.style = "visibility:visible"
        fuelLevelUpdate.innerHTML = `<li value=3>Fuel level high enough for launch.</li>`
        cargoStatusUpdate.innerHTML = `<li style=color:red value=4>Cargo mass too high for launch.</li>`
        launchStatusUpdate.innerHTML = `<h2 style=color:red>Shuttle not ready for launch</h2>`
        event.preventDefault();
    } else if (Number(fuelLevel) < 10000 && Number(cargoLevel) > 10000) {
        listUpdate.style = "visibility:visible"
        fuelLevelUpdate.innerHTML = `<li style=color:red value=3>Fuel too low for launch.</li>`
        cargoStatusUpdate.innerHTML = `<li style=color:red value=4>Cargo mass too high for launch.</li>`
        launchStatusUpdate.innerHTML = `<h2 style=color:red>Shuttle not ready for launch</h2>`
        event.preventDefault();
    } else {
        launchStatusUpdate.innerHTML = `<h2 style=color:green>Shuttle ready for launch!</h2>`
        listUpdate.style = "visibility: hidden"
        event.preventDefault();
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
    //  .then(function (response) {
    //  console.log(response);
    //    response.json()
    //  .then(function (json) {
    //  console.log(json);
    //  });
    //  })

    return planetsReturned.json();
};

function pickPlanet(planets) {
    let randomPlanet = planets[Math.floor(Math.random() * planets.length)];
    return randomPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;

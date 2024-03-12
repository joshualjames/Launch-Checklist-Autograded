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
        // console.log(testInput)
        return "Not a Number";
    } else if (isNaN(testInput) === false) {
        return "Is a Number";
    } else {
        return "Is a String"
    };

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // event.preventDefault();
    // const listUpdate = document.getElementById(list);
    // console.log(listUpdate.style);
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required.")
        // event.preventDefault();
        return
    };
    if (validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoLevel) !== "Is a Number") {
        alert("Invalid input. Should be a number. Verify all values.");
        // event.preventDefault();
        return
    };
    if (validateInput(pilot) !== "Not a Number" || validateInput(copilot) !== "Not a Number") {
        alert("Invalid input. Should be a string. Verify all values.")
        // event.preventDefault();
        return
    }
    const pilotUpdate = document.getElementById("pilotStatus");
    pilotUpdate.innerHTML = `<li value=1>Pilot ${pilot} is ready for launch</li>`;
    const copilotUpdate = document.getElementById("copilotStatus");
    copilotUpdate.innerHTML = `<li value=2>Co-pilot ${copilot} is ready for launch</li>`;
    const fuelLevelUpdate = document.getElementById("fuelStatus");
    const launchStatusUpdate = document.getElementById("launchStatus");
    const cargoStatusUpdate = document.getElementById("cargoStatus");
    if (Number(fuelLevel) < 10000 && Number(cargoLevel) < 10000) {

        list.style.visibility = "visible"
        fuelLevelUpdate.innerHTML = `<li style=color:red value=3>Fuel level too low for launch.</li>`
        console.log(fuelLevelUpdate);
        cargoStatusUpdate.innerHTML = `<li value=4>Cargo mass low enough for launch.</li>`
        launchStatusUpdate.innerHTML = `<h2 syle=color:'red'>Shuttle Not Ready for Launch</h2>`
        launchStatusUpdate.style.color = 'red';
        // event.preventDefault();
    } else if (Number(fuelLevel) > 9999 && Number(cargoLevel) > 10000) {
        list.style.visibility = "visible"
        fuelLevelUpdate.innerHTML = `<li value=3>Fuel level high enough for launch.</li>`
        cargoStatusUpdate.innerHTML = `<li style=color:red value=4>Cargo mass too heavy for launch.</li>`
        launchStatusUpdate.innerHTML = `<h2>Shuttle Not Ready for Launch</h2>`
        launchStatusUpdate.style.color = 'red';
        // event.preventDefault();
    } else if (Number(fuelLevel) < 10000 && Number(cargoLevel) > 10000) {
        list.style.visibility = "visible"
        fuelLevelUpdate.innerHTML = `<li style=color:red value=3>Fuel level too low for launch.</li>`
        cargoStatusUpdate.innerHTML = `<li style=color:red value=4>Cargo mass too heavy for launch.</li>`
        launchStatusUpdate.innerHTML = `<h2>Shuttle Not Ready for Launch</h2>`
        launchStatusUpdate.style.color = 'red';
        // event.preventDefault();
    } else {
        launchStatusUpdate.innerHTML = "Shuttle is Ready for Launch"
        fuelLevelUpdate.innerHTML = `<li value=3>Fuel level high enough for launch.</li>`
        cargoStatusUpdate.innerHTML = `<li value=4>Cargo mass low enough for launch.</li>`
        launchStatusUpdate.style.color = 'green'
        list.style.visibility = "visible"
        // event.preventDefault();
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
    //  }) test

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

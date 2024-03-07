// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        console.log(testInput)
        return "Not a Number";
    } else if (isNaN(testInput)===false) {
        return "Is a Number";
    } else {
        return "Is a String"
    };
    
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
     const update = document.getElementById(list);
     const pilotUpdate = document.getElementById("pilotStatus");
     pilotUpdate.innerHTML = `<li value=1>Pilot ${pilot} Ready</li>`;
     const copilotUpdate = document.getElementById("copilotStatus");
     copilotUpdate.innerHTML = `<li value=2>Copilot ${copilot} Ready</li>`;
     const fuelLevelUpdate = document.getElementById("fuelStatus");
     const launchStatusUpdate = document.getElementById("launchStatus");
     const cargoStatusUpdate = document.getElementById("cargoStatus");
     if (Number(fuelLevel) < 10000 && Number(cargoLevel) < 10000) {
         update.style = "visibility:visible"
         fuelLevelUpdate.innerHTML = `<li value=3>Fuel level too low for launch.</li>`
         cargoStatusUpdate.innerHTML = `<li value=4>Cargo mass low enough for launch.</li>`
         launchStatusUpdate.innerHTML = `<h2 style=color:red>Shuttle not ready for launch</h2>`
         event.preventDefault();
     } else if (Number(fuelLevel) > 10000 && Number(cargoLevel) > 10000) {
         update.style = "visibility:visible"
         fuelLevelUpdate.innerHTML = `<li value=3>Fuel level high enough for launch.</li>`
         cargoStatusUpdate.innerHTML = `<li value=4>Cargo mass too high for launch.</li>`
         launchStatusUpdate.innerHTML = `<h2 style=color:red>Shuttle not ready for launch</h2>`
         event.preventDefault();
     } else if (Number(fuelLevel) < 10000 && Number(cargoLevel) > 10000){
         update.style = "visibility:visible"
         fuelLevelUpdate.innerHTML = `<li value=3>Fuel too low for launch.</li>`
         cargoStatusUpdate.innerHTML = `<li value=4>Cargo mass too high for launch.</li>`
         launchStatusUpdate.innerHTML = `<h2 style=color:red>Shuttle not ready for launch</h2>`
         event.preventDefault();
     } else {
         launchStatusUpdate.innerHTML = `<h2 style=color:green>Shuttle ready for launch!</h2>`
         update.style = "visibility: hidden"
         event.preventDefault();
     }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;
 
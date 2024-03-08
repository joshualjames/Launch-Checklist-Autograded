// Write your JavaScript code here!


window.addEventListener("load", function () {
    let form = document.querySelector("form")
    form.addEventListener("submit", () => {
        let pilotInput = document.querySelector("input[name=pilotName]");
        let copilotInput = document.querySelector("input[name=copilotName]");
        let fuelInput = document.querySelector("input[name=fuelLevel]");
        let cargoInput = document.querySelector("input[name=cargoMass]");
        if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
            alert("All fields are required.")
            event.preventDefault();
        };
        if (validateInput(fuelInput.value) !== "Is a Number" || validateInput(cargoInput.value) !== "Is a Number") {
            alert("Invalid input. Verify all values.");
            event.preventDefault();
        };
        // let faultyList= "faultyItems"
        formSubmission(document, "faultyItems", pilotInput.value, copilotInput.value, fuelInput.value, cargoInput.value);
    });

    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // console.log(myFetch());
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        // console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        pickedPlanet = pickPlanet(listedPlanets);
        console.log(pickedPlanet.image)
        addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star,
            pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);
    })

});
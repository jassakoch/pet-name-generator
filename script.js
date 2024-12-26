import petNames from "./data.js";

const userInput = document.querySelector('#pet-adjective');
const submitBtn = document.querySelector('#btn');
const petNameDisplay = document.querySelector('#pet-name-display');

function capitalizeLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

submitBtn.addEventListener('click', () => {

    const userAdjective = userInput.value;
    const capitalizedAdjective= capitalizeLetter(userAdjective);
    const randomIndex = Math.floor(Math.random() * petNames.length);
    const randomPet = petNames[randomIndex];
    if (userAdjective === "select") {
        petNameDisplay.textContent = `Please select an adjective`
    } else {

        petNameDisplay.textContent = `Your pet name is ${capitalizedAdjective} ${randomPet}`
    }
})




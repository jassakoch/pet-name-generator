import petNames from "./data.js";

const userInput = document.querySelector('#pet-adjective');
const submitBtn = document.querySelector('#btn');
const petNameDisplay = document.querySelector('#pet-name-display');

console.log(userInput);
console.log(submitBtn);
console.log(petNameDisplay);

submitBtn.addEventListener('click', () => {
    console.log('button clicked');
    const userAdjective = userInput.value;
    console.log('selected adjective')
    const randomIndex = Math.floor(Math.random() * petNames.length);
    const randomPet = petNames[randomIndex];
if (userAdjective === "select") {
    petNameDisplay.textContent = `Please select an adjective`
} else {

    petNameDisplay.textContent = `Your pet name is ${userAdjective} ${randomPet}`
}
})




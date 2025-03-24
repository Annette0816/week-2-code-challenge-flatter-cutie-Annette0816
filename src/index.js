// Your code here
//fetch characters from server and dispaly them in character-bar
fetch("http://localhost:3000/characters")
.then(response => response.json())
.then( characters => {
    const characterBar = document.getElementById("character-bar");

    characters.forEach(character => {
       const characterSpan = document.createElement("span");
       characterSpan.textContent = character.name;
       
       //adding an event listener
       characterSpan.addEventListener("click", () => { displayCharacter(character);

       });

       //append p to character bar
       characterBar.appendChild(characterSpan);
    });

});

//function to display characters when clicked
function displayCharacter(character) {
    const nameElement = document.getElementById("name");
    const imageElement = document.getElementById("image");
    const votesElement = document.getElementById("vote-count");

    nameElement.textContent = character.name;
    imageElement.src = character.image;
    imageElement.alt = character.name;
    votesElement.textContent = character.votes
}

//updating the number of votes 

const votesForm = document.getElementById("votes-form");

votesForm.addEventListener("submit",  event =>{
    event.preventDefault();

    const votesInput = document.getElementById("votes");
    const addVotes = parseInt(votesInput.value);

    if (isNaN(addVotes)) {
       return alert("Please enter a number!");
};
//clears the input after submission
votesInput.value="";

currentCharacter.votes += addVotes;
//updates the DOM
document.getElementById("vote-count").textContent = currentCharacter.votes;
});

//Resets the votes
const resetButton = document.getElementById("reset-btn");
 resetButton.addEventListener("click", function name(params) {
    
 })
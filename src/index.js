// Your code here

//fetch characters from server and dispaly them in character-bar
document.addEventListener("DOMContentLoaded", () =>{

const baseURL = "https://flattercuties-backend-tawny.vercel.app/characters";


const characterBar = document.getElementById("character-bar");
    const characterName = document.getElementById("name");
    const characterImage = document.getElementById("image");
    const voteCount = document.getElementById("vote-count");
    const voteForm = document.getElementById("votes-form");
    const voteInput = document.getElementById("votes");
    const resetButton = document.getElementById("reset-btn");
  
    // fetch and display the character list
    fetch(baseURL)
      .then(response => response.json())
      .then(characters => {
        characters.forEach(character => {
          const span = document.createElement("span");
          span.textContent = character.name;
          span.style.cursor = "pointer";
  
          span.addEventListener("click", function () {
            showCharacterDetails(character);
          });
  
          characterBar.appendChild(span);
        });
  
         
        if (characters.length > 0) {
          showCharacterDetails(characters[0]);
        }
      });
        
        
    // dispaly the details of a selected character
    function showCharacterDetails(character) {
      characterName.textContent = character.name;
      characterImage.src = character.image;
      characterImage.alt = character.name;
      voteCount.textContent = character.votes;
     
    }
  
   // handle vote submission
    voteForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const votesToAdd = parseInt(voteInput.value) || 0;
      const currentVotes = parseInt(voteCount.textContent);
      voteCount.textContent = currentVotes + votesToAdd;
      //clears input after submission
      voteInput.value = "";
    });
  
    //reset votes back to zero
    resetButton.addEventListener("click", function () {
      voteCount.textContent = "0";
    });
  } );
 


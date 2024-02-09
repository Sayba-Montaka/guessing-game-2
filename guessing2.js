//initializing some value
let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalloss = 0;

console.clear();
const formField = document.querySelector(".form-field");
const form = document.querySelector(".form")
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const check = document.querySelector(".buttons");
const resultText = document.querySelector(".resultText");
const lostWon = document.createElement("p");
const remainingAttemp = document.querySelector(".remainingAttempts");
const title = document.querySelector(".title");

form.addEventListener("submit",function(event){
    event.preventDefault();
  
    attempts++;
    if(attempts>5){
      guessingNumber.disabled = true;
      check.disabled = true;
    } else{
      checkResult(guessingNumber.value);
      remainingAttemp.innerHTML = `Remaining attempts:${totalAttempts-attempts}`;
    }
    guessingNumber.value = "";
  
});



function checkResult(guessingNumber) {
 
    const randomNum = getRandomNum(5);
  if(guessingNumber ==  randomNum){
      resultText.innerHTML = `You have won`;
    totalWons++;

  } else
  {
    resultText.innerHTML =  `you have lost . Random number was: ${randomNum}`;
    totalloss++;
  }
  lostWon.innerHTML = `Won: ${totalWons} ,Lost: ${totalloss}`;
  cardBody.appendChild(lostWon);
}


function getRandomNum(limit){
   return Math.floor(Math.random() * limit) +1;


}

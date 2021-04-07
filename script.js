var entryForm;

window.addEventListener('DOMContentLoaded', function(){

inputForm = document.getElementById("entryForm");
buttonExecute = document.getElementById("runButton");
nameForFortune = document.getElementById("fortuneTextName");
joinerTextFortune = document.getElementById("joinerText");
adjectiveFortune = document.getElementById("adjective");
fullFortune=document.getElementById("fortuneText");

// alert("loaded");

buttonExecute.addEventListener("click",fortune);
});


function fortune(){
  var fortuneList = ["and you will make a new friend.","and you will watch Star Wars.","and you will do well in your classes.","and you will get interviewed on the street by a random person","and you will learn something new.","and you will eat delicious food."];

  var inputContent = inputForm.value;
  if (inputContent!=""){
    restyle(inputContent);
    fortuneText.innerHTML = fortuneList[Math.floor(Math.random()*fortuneList.length)];

  }
  else {
    error();
  }

}

function restyle(name) {

  nameForFortune.innerHTML = name + ",";
  joinerTextFortune.innerHTML = "your week will be ";
  adjective.innerHTML = generateAdjective();
  nameForFortune.classList.toggle("fortuneStyle");

  nameForFortune.style.color=randomColor();
  nameForFortune.style.fontSize="50px";

  adjective.style.color=randomColor();
  adjective.style.fontWeight="bold";
  randomFontSize=Math.floor(Math.random()*50)+15;
  adjective.style.fontSize=randomFontSize+"px";
  fortuneText.style.fontFamily="cursive";


}

function error(){
  fullFortune.innerHTML = "Please enter your name!";

}

function generateAdjective(){
var adjectiveList = ["fantastic","great","amazing","fantabulous","unforgettable"]
var adjectiveChosen = adjectiveList[Math.floor(Math.random()*adjectiveList.length)]
  return adjectiveChosen;
}

function randomColor(){
  var randomRed = Math.random() *255;
  var randomBlue = Math.random() *255;
  var randomGreen = Math.random() *255;
  // console.log(randomRed);
  var randomColor="rgb(" + randomRed + "," + randomGreen +","+randomBlue+")";
  return randomColor;
}

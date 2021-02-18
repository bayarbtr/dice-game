var activePlayer = 1;
var score = [0,0];
var roundScore;
var dice;
var diceDom = document.querySelector('.dice')

var diceNumber = 0; //Math.floor(Math.random()*6)+1;
//console.log(diceNumber);

document.getElementById('score-0').textContent = diceNumber;
document.getElementById('score-1').textContent = diceNumber;
document.getElementById('current-0').textContent = diceNumber;
document.getElementById('current-1').textContent = diceNumber;
diceDom.style.display = 'none';

document.querySelector(".btn-roll").addEventListener("click",shooShid);

function shooShid(){
    diceNumber = Math.floor(Math.random()*6)+1;
    document.getElementById('current-0').textContent = diceNumber;
    alert("Шоо буулаа: " + diceNumber);
    diceDom.style.display = 'block';
    diceDom.src = "dice-"+diceNumber+".png";
}
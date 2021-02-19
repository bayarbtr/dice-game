var activePlayer,score,roundScore,dice,diceNumber, isGameOver; 
var diceDom = document.querySelector('.dice');

initGame();

function initGame(){
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.getElementById("name-0").textContent = "Toglogch 1";
    document.getElementById("name-1").textContent = "Toglogch 2";
    activePlayer = 0;
    isGameOver = false;
    score = [0,0];
    roundScore=0;
    dice=0;
    diceNumber = 0; 
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    diceDom.style.display = 'none';
}


document.querySelector(".btn-roll").addEventListener("click", function (){
    if (isGameOver === false){
    diceNumber = Math.floor(Math.random()*6)+1;
    diceDom.src = "dice-"+diceNumber+".png";
    diceDom.style.display = 'block';
   
    if (diceNumber !== 1) {
        roundScore=roundScore+diceNumber;
        document.getElementById('current-'+activePlayer).textContent = roundScore;
        
    }
    else         speechtoNextPlayer();
}
}
);

document.querySelector(".btn-hold").addEventListener("click",function(){
    if (isGameOver===false){
    score[activePlayer]=score[activePlayer]+roundScore;
    if (score[activePlayer]<=100)
    {   isGameOver = true;
        document.getElementById("name-"+activePlayer).textContent = "WINNER!!!";
        document.querySelector(".player-" + activePlayer+ "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer+ "-panel").classList.toggle("active");
            }
    document.getElementById('score-'+activePlayer).textContent = score[activePlayer];
    speechtoNextPlayer();
        }
});

function speechtoNextPlayer(){
    roundScore = 0;
    document.getElementById('current-'+activePlayer).textContent = 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    diceDom.style.display = 'none'; 
}



document.querySelector(".btn-new").addEventListener("click",function(){
    if (isGameOver===false) alert("Тоглоом дуусаагүй байна!!!.")
        else initGame();

});
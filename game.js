let chance=100;
let highscore=null;
let random = generateRandom(100);
function playAgain(){
    document.getElementById("input").value="";
    document.querySelector("#maximum").textContent=100;
    document.querySelector("#random").textContent="?";
    random = generateRandom(100); 
    document.querySelector("#result").textContent="START GUESSING.......";
    document.body.style.backgroundColor=  "lightgreen";
}

function generateRandom(num){
    return parseInt(Math.random() * num) + 1;
}

function check(){
let input=document.getElementById("input").value;
if(random!==0){
    if(random>input){
    document.querySelector("#result").textContent="GUESS IS LOW🪫🪫👇👇";
   chance--;
   document.querySelector("#maximum").textContent=chance;
}
else if(random<input){
    document.querySelector("#result").textContent="GUESS IS HIGH👆👆⚡⚡";
    chance--;
    document.querySelector("#maximum").textContent=chance;
}
else if(random=input){
    document.querySelector("#result").textContent="🎆🎆 PERFECT SUPERB 🎇🎇";
    document.body.style.backgroundColor="green";
    chance;
    document.querySelector("#maximum").textContent=chance;
    document.querySelector("#random").textContent=random;
    highscore=chance;
    document.querySelector("#minimum").textContent=highscore;
}
}
else{
    document.querySelector("#result").textContent="😥😥GAME OVER😥😥";
}
}
let PlayerDecision = ["Hi"];

document.getElementById("Approached").onclick = function(){
    PlayerDecision.push("Approached The Creature");
    console.log(PlayerDecision);
}

document.getElementById("Run").onclick = function(){
    PlayerDecision.push("You Ran Away");
    console.log(PlayerDecision);
}

document.getElementById("Result").innerHTML = PlayerDecision;
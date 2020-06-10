var randomNumber = Math.floor(Math.random()*6)+1;
console.log(randomNumber);
var randomDiceImages="dice"+randomNumber+".png";
var randomImageSource="/Dice game/images/"+randomDiceImages;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);



var randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);
var randomDiceImages1="dice"+randomNumber1+".png";
var randomImageSource1="/Dice game/images/"+randomDiceImages1;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource1);


if(randomNumber>randomNumber1)
{
    document.querySelector("h1").innerHTML="🏅 Player1  Wins";
    console.log("Player 1 Wins");
}
else if(randomNumber==randomNumber1)
{
    document.querySelector("h1").innerHTML="It is a DRAW";
}
else
{
    document.querySelector("h1").innerHTML="🏅 Player2  Wins ";
}

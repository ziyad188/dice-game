var randomNumber1;
randomNumber1 = Math.floor((Math.random()*6) +1);
var dice1 = "dice"+randomNumber1;
randomNumber2 = Math.floor((Math.random() *6) + 1);
var dice2 = "dice" +randomNumber2;
document.querySelectorAll("img")[0].setAttribute("src","images/"+ dice1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src","images/"+ dice2 + ".png");

if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
}else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "player 2 win!";
}else{
    document.querySelector("h1").innerHTML = "player 1 win!";

}
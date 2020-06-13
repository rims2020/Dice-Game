document.getElementById("heading").addEventListener('click',function (){
randomNumber1=Math.floor(Math.random()*6+1);
randomNumber2=Math.floor(Math.random()*6+1);

    document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".PNG");
    document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".PNG");
if (randomNumber1>randomNumber2){
    document.getElementById("heading").innerHTML="Player 1 wins!";
}
else if (randomNumber2>randomNumber1){
    document.getElementById("heading").innerHTML="Player 2 wins!";
}
else
{
    document.getElementById("heading").innerHTML="Math Draw!";
}
});




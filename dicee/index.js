
function getRandom(){

  let randomNumber1 = Math.floor(Math.random()*6)+1;
  let randomNumber2 = Math.floor(Math.random()*6)+1;
  let h1= document.querySelector("h1")

  document.querySelector(".dice img").src="images/dice" +randomNumber1+".png";
  document.querySelector(".dice .img2").src="images/dice" +randomNumber2+".png";

  if(randomNumber1 >randomNumber2){
    h1.innerHTML="Player 1 Wins!"
  }else if(randomNumber1===randomNumber2){
    h1.innerHTML ="Draw!"
  }else{
    h1.innerHTML ="Player 2 Wins!"
  }

}
getRandom();

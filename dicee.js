let randomno1 = Math.floor((Math.random()*6))+1;
let img1 = document.querySelectorAll("img")[0];
let randomimg = "images/dice" +randomno1 +".png"
img1.setAttribute("src" , randomimg)

let randomimg2 = Math.floor((Math.random()*6))+1;
let img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src" , "images/dice"+randomimg2+".png" )
let heading = document.querySelector("h1");
// console.log(heading);
// console.log(randomimg1);
// console.log(randomimg2);
if (randomno1 > randomimg2){
    document.querySelector("h1").innerHTML= "Player 1 won";
}else if (randomno1 < randomimg2){
    document.querySelector("h1").innerHTML= "Player 2 won";

}else{
    document.querySelector("h1").innerHTML= "It was a tie";
}

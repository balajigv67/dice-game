
// Image 1 Logice
let randomDice1 = Math.floor(Math.random()*6)+1;
let imageLoaction1 = "./images/dice"+randomDice1+".png";

let img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",imageLoaction1);

// Image 2 Logic
let randomDice2 = Math.floor(Math.random()*6)+1;
let imageLoaction2 = "./images/dice"+randomDice2+".png";

let img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",imageLoaction2);

// Heading Logic(H1)
if(randomDice1>randomDice2){
    document.querySelector("h1").innerHTML = "🏁Player 1 Won.!"; 
    document.querySelectorAll("p")[0].style.color = "#B4FF9F";
}else if(randomDice1<randomDice2){
    document.querySelector("h1").innerHTML = "Player 2 Won.!🏁";
    document.querySelectorAll("p")[1].style.color = "#B4FF9F";
}else{
    document.querySelector("h1").innerHTML = "Draw.! 🙄";
}


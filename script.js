let yellow=document.querySelector(".car1");
let orange=document.querySelector(".car2");
let white=document.querySelector(".car3");
let sportOrange=document.querySelector(".car4");
let sportRed=document.querySelector(".car5");
let plus=document.querySelector(".plus");
let minus=document.querySelector(".minus");

let hasWin=false;
let score=100;
let bet=0;
let whichCar="";
let winner;

let properlyWinner=(color) => {
    if(bet <= 0 || score <= 0) {
        alert("Ты не сделал ставку или твой счет равен нулю");
    } 
    else {
        hasWin = false;
        speedCar(yellow, "yellow");
        speedCar(orange, "orange");
        speedCar(white, "white");
        speedCar(sportOrange, "sportOrange");
        speedCar(sportRed, "sportRed");
        whichCar = color;
        score -= bet;
        document.querySelector(".score").innerHTML=score;
        
    }
}
plus.onclick=() => {
    if(bet >= score) {
        plus.disabled=true;
    }
    else {
        minus.disabled=false;
        bet += 10;
        document.querySelector(".bet").innerHTML=bet;
    }
}
minus.onclick=() => {
    if(bet <= 0) {
        minus.disabled=true;
    }
    else {
        plus.disabled=false;
        bet -= 10;
        document.querySelector(".bet").innerHTML=bet;
    }
}
let speedCar=(car, color) => {
    let margin=0;
    let interval=setInterval(() => {
        let speed=Math.random() * 0.1;
        margin=margin + speed;
        car.style.marginLeft=margin + "%";
        if(margin > 100) {
            hasWin = true;
            if(whichCar == color) {
                score += bet * 2;
                document.querySelector(".score").innerHTML=score;
                alert("Ты выйграл")
            }
            else {
                alert("Победа за: "+color);
            }   
        }
        
        if(hasWin == true) {
            clearInterval(interval);
        }
    },5)
}

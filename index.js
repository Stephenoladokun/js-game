let attempts = 5;


let enter = document.getElementById("submit").onclick = function (){
    const Enternumber = Number(document.getElementById("input").value);
    let randomNum = Math.floor(Math.random() * 20);
    console.log(Enternumber);
    console.log(randomNum);

    if(Enternumber == randomNum){
        document.getElementById("text").textContent = "you got the number right 🥳";
    }

    else{
        document.getElementById("text").textContent = `you did'nt get it, you have ${attempts} chances left`;
    }

    if(Enternumber > 20 ){
        document.getElementById("text").textContent = "you can only guess a number from 1-20";
    }

    attempts--;

    if(attempts < 0){
        document.getElementById("text").textContent = "Game over,you have used all your chances";
    }

    if(Enternumber == 0){
        document.getElementById("text").textContent = "value cannot be empty";
    }
}

document.getElementById("play").onclick = function(){
    attempts = 5;
    document.getElementById("text").textContent = "input a number from 1 - 20";
}


 


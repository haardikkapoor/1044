// generation of random value


var y = Math.floor(Math.random() * 10 + 1);

// count of attempts


guess = 0
function submit(){
    var x = document.getElementById("guessField").value;

    if(x == y){
        alert("conglatulations!!!  you guessed it rightt!!")
       guess = 1
    }

    else if(x > y)
    {
        guess++;
        alert("opps sorry try a smaller number");
    }
    else
    {
        guess++;
        alert("opps sorry try a greater number")
    }
}


function playAgain(){
    x=Math.floor(Math.random() * 10+1)
}


// until hit
  
// function for the number sent by the user
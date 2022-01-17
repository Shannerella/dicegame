// create a method to generate a number between 1-6

var randomNumber1 = Math.floor((Math.random() * 6) + 1);

// use this number to select one of the images from dice1-dice6

var randomDiceImage = "dice" + randomNumber1 + ".png";

// use this image number to select an image in the image folder

var randomImageSource1 = "images/" + randomDiceImage;


//to change the image of player 1

//select the element you want to manipulate [img] 

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);


//to change the image of player 2

var randomNumber2 = Math.floor((Math.random () * 6) + 1);

var randomImageSource2 = "images/" + "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)


// change the text based on the result


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
    document.querySelector("h1").innerHTML = "Draw"
}


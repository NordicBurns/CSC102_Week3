function playCraps() { // Function to play craps
    console.log("playCraps() started"); // Links to HTML code 
    var die1 = Math.ceil(Math.random( ) * 6); // Die one max is 6
    var die2 = Math.ceil(Math.random( ) * 6); // Die two's max is 6
    var sum = die1 + die2; // The sum equals Die 1 + Die 2
    document.getElementById("die1Res").innerHTML = die1; //Gets die one by thw element's ID
    document.getElementById("die2Res").innerHTML = die2; // Gets die two by the element's ID
    document.getElementById("sum1Res").innerHTML = sum; // Writes the sum by the element's ID
    if (sum == 7 || sum == 11) { // If the sum is 7 or 11
        document.getElementById("finalRes").innerHTML = // Gets final res by ID
            "Craps - You Lose"; // YOU LOSE
    }
    else if (die1 == die2 && die1 % 2 == 0) { // If die one equals die two 
        document.getElementById("finalRes").innerHTML = // Gets final res by ID
            "Doubles - You Win"; // YOU WIN
    } else { // Otherwise
        document.getElementById("finalRes").innerHTML = // Gets final res by ID
            "Draw - Try Again"; // DRAW
    }
}


function Blastoff() { // Timeloop Function
    var currTime = 50; // Amount of Time in TImer,50sec
    document.getElementById("CountdownTimer").innerHTML = currTime; // Sets countdown timer with current time
    setTimeout(function () { //Set timeout funtction
        currTime = currTime - 5; // Current time subtracted by 5 seconds
        document.getElementById("CountdownTimer").innerHTML = currTime; // Gets countdown timer by element's ID + current time
    }, 5000); // Subtract 5000 milisecends
    setTimeout(function () {//Set timeout funtction
        currTime = currTime - 5;// Current time subtracted by 5 seconds
        document.getElementById("CountdownTimer").innerHTML = currTime;// Gets countdown timer by element's ID + current time
    }, 10000);// Subtract 10000 milisecends
    setTimeout(function () {//Set timeout funtction
        currTime = currTime - 5;// Current time subtracted by 5 seconds
        document.getElementById("CountdownTimer").innerHTML = currTime;// Gets countdown timer by element's ID + current time
    }, 15000);// Subtract 15000 milisecends
    setTimeout(function () {//Set timeout funtction
        currTime = currTime - 5;// Current time subtracted by 5 seconds
        document.getElementById("CountdownTimer").innerHTML = currTime;// Gets countdown timer by element's ID + current time
    }, 20000);// Subtract 20000 milisecends
    setTimeout(function () {//Set timeout funtction
        currTime = currTime - 5;// Current time subtracted by 5 seconds
        document.getElementById("CountdownTimer").innerHTML = currTime;// Gets countdown timer by element's ID + current time
    }, 25000);// Subtract 25000 milisecends
    setTimeout(function () {//Set timeout funtction
        currTime = currTime - 5;// Current time subtracted by 5 seconds
        document.getElementById("CountdownTimer").innerHTML = currTime;// Gets countdown timer by element's ID + current time
    }, 30000);// Subtract 30000 milisecends
    setTimeout(function () {//Set timeout funtction
        currTime = currTime - 5;// Current time subtracted by 5 seconds
        document.getElementById("CountdownTimer").innerHTML = currTime;// Gets countdown timer by element's ID + current time
    }, 35000);// Subtract 35000 milisecends
    setTimeout(function () {//Set timeout funtction
        currTime = currTime - 5;// Current time subtracted by 5 seconds
        document.getElementById("CountdownTimer").innerHTML = currTime;// Gets countdown timer by element's ID + current time
    }, 40000);// Subtract 40000 milisecends
    setTimeout(function () {//Set timeout funtction
        currTime = currTime - 5;// Current time subtracted by 5 seconds
        document.getElementById("CountdownTimer").innerHTML = currTime;// Gets countdown timer by element's ID + current time
    }, 45000);// Subtract 45000 milisecends
    setTimeout(function () {//Set timeout funtction
        currTime = currTime - 5;// Current time subtracted by 5 seconds
        document.getElementById("CountdownTimer").innerHTML = "Blastoff!!!";// Gets countdown timer by element's ID + Blastoff!!!
    }, 50000);// Subtract 50000 milisecends
}
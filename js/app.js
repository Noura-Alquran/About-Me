'use strict';
let userName = prompt('What is your name?')
alert ('welcome '+userName);
alert('I\'m going to play a guessing game with you about me ');

let knowMe= prompt('Do you think I worked for a company before?');

knowMe= knowMe.toLowerCase();

if (knowMe ==='yes' || knowMe ==='y')
{
    //console.log("No ,I don\'t");
    alert ('No ,I don\'t');

}
else if (knowMe ==='no' || knowMe ==='n')
{
//console.log("correct");
alert ('correct');
}
else {
    //console.log("omg!");
alert ('omg!');
}

let footBall= prompt('Do I watch football?');

footBall= footBall.toLowerCase();

if (footBall ==='yes' || footBall ==='y')
{
    //console.log("No ,I don\'t");
    alert ('No ,I don\'t');

}
else if (footBall ==='no' || footBall ==='n')
{
//console.log("correct");
alert ('correct');
}
else {
    //console.log("omg!");
alert ('omg!');
}


let knowUni= prompt('Did I graduate from JUST university?');

knowUni= knowUni.toLowerCase();

if (knowUni ==='yes' || knowUni ==='y')
{
    //console.log("yes that is true");
    alert ('yes that is true');

}
else if (knowUni ==='no' || knowUni ==='n')
{
//console.log("You don't know me");
alert ('You don\'t know me');
}
else {
    //console.log("omg!");
alert ('omg!');
}

let knowColor= prompt('Do I prefer the blue color?');

knowColor= knowColor.toLowerCase();

if (knowColor ==='yes' || knowColor==='y')
{
    //console.log("yes that is true");
    alert ('yes that is true');

}
else if (knowColor ==='no' || knowColor ==='n')
{
//console.log("You don't know me");
alert ('You don\'t know me');
}
else {
    //console.log("omg!");
alert ('omg!');
}

let know= prompt('Do you think I love my life?');

know= know.toLowerCase();

if (know ==='yes' || know ==='y')
{
   //console.log("correct");
   alert ('correct'); 
    

}
else if (know ==='no' || know ==='n')
{
//console.log("incorrect");
alert ('uncorrect');
}
else {
    //console.log("omg!");
alert ('omg!');
}
alert ('Welcome to you again '+ userName);


            
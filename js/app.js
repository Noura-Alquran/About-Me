'use strict';
let userName = prompt('What is your name?')
alert ('welcome '+userName);
alert('I\'m going to play a guessing game with you about me ');
let score= 0;
//Q1
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
score=score+1;
}
else {
    //console.log("omg!");
alert ('omg!');
}
//Q2
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
score=score+1;
}
else {
    //console.log("omg!");
alert ('omg!');
}
//Q3

let knowUni= prompt('Did I graduate from JUST university?');

knowUni= knowUni.toLowerCase();

if (knowUni ==='yes' || knowUni ==='y')
{
    //console.log("yes that is true");
    alert ('yes that is true');
    score =score +1;

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
//Q4

let knowColor= prompt('Do I prefer the blue color?');

knowColor= knowColor.toLowerCase();

if (knowColor ==='yes' || knowColor==='y')
{
    //console.log("yes that is true");
    alert ('yes that is true');
    score=score+1;

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
//Q5
let know= prompt('Do you think I love my life?');

know= know.toLowerCase();

if (know ==='yes' || know ==='y')
{
   //console.log("correct");
   alert ('correct'); 
   score=score+1;

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
//Q6 
let knowFavNum= prompt('What is my favorite number?')
knowFavNum=parseInt(knowFavNum);
//console.log(knowFavNum)
for ( let n=1 ; n<=4 ; n++)
{
    if (knowFavNum=== 5){
        alert ('correct');

     break;}
     else if ( knowFavNum>5)
    { alert("too high");}
    else if (knowFavNum<5)
    {
        alert('too low');
    }
let attempt =4-n;
knowFavNum= prompt('You have  ' + attempt +'attempts'+'\n What is my favorite number?');
knowFavNum=parseInt(knowFavNum);

}
if (knowFavNum===5)
    {
        score=score+1;
    }
alert ('My favorite number is 5');

//Q7
let arrOfNames =['mamoun ','manal ','rahmah ','eman ','jana ','mohmmad '];
//console.log(arrOfNames);
let knowFamily=prompt('Guess the name of anyone of my family member?')
knowFamily=knowFamily.toLowerCase();
//console.log(knowFamily);
for( let m=0;m <6;m++)
{
    if (arrOfNames.indexOf(knowFamily) !==-1)
    {
       break;

    }
    
else 
 {
     let att = 5-m
    knowFamily=prompt('You have '+ att + 'attempts'+' \n Guess the name of anyone of my family member?');
    knowFamily=knowFamily.toLowerCase();
    //console.log(knowFamily);  
}
}
if (arrOfNames.indexOf(knowFamily) !==-1)
    {
        alert ('correct')
        score =score+1;

    }
alert ( 'My family members are : '+ arrOfNames );

alert ('Your score is '+ score +' out of 7')
    if (score>=5)
    {
        alert ('You Know me well!');
    }
    else {
        alert ('You don\'n know me well');
    }
alert ('Welcome to you again '+ userName);
    
       


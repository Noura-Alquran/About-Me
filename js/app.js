'use strict';
function userID (userName){
 userName = prompt('What is your name?')
alert ('welcome '+userName);
}
userID(); 
alert('I\'m going to play a guessing game with you about me ');
let score= 0;
function an(knowMe){
knowMe= prompt('Do you think I worked for a company before?');
knowMe= knowMe.toLowerCase();
if (knowMe ==='yes' || knowMe ==='y')
{
    alert ('No ,I don\'t');
}
else if (knowMe ==='no' || knowMe ==='n')
{
alert ('correct');
score=score+1;
}
else {
alert ('omg!');
}
}
an();
function a2(footBall){
footBall= prompt('Do I watch football?');
footBall= footBall.toLowerCase();
if (footBall ==='yes' || footBall ==='y')
{
    alert ('No ,I don\'t');
}
else if (footBall ==='no' || footBall ==='n')
{
alert ('correct');
score=score+1;
}
else {
alert ('omg!');
}
}
a2();
function a3(knowUni){
 knowUni= prompt('Did I graduate from JUST university?');
knowUni= knowUni.toLowerCase();
if (knowUni ==='yes' || knowUni ==='y')
{
    alert ('yes that is true');
    score =score +1;
}
else if (knowUni ==='no' || knowUni ==='n')
{
alert ('You don\'t know me');
}
else {
alert ('omg!');
}
}
a3();
function a4(knowColor){
 knowColor= prompt('Do I prefer the blue color?');
knowColor= knowColor.toLowerCase();
if (knowColor ==='yes' || knowColor==='y')
{
    alert ('yes that is true');
    score=score+1;
}
else if (knowColor ==='no' || knowColor ==='n')
{
alert ('You don\'t know me');
}
else {
alert ('omg!');
}

}
a4();

function a5(know){

 know= prompt('Do you think I love my life?');
know= know.toLowerCase();
if (know ==='yes' || know ==='y')
{
   alert ('correct'); 
   score=score+1;
}
else if (know ==='no' || know ==='n')
{
alert ('uncorrect');
}
else {
alert ('omg!');
}
}
a5();

function guessNumber ( knowFavNum ){
 knowFavNum= prompt('What is my favorite number?')
knowFavNum=parseInt(knowFavNum);
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
}
guessNumber();
function guessItemOnArray(arrOfNames){
 arrOfNames =['mamoun ','manal ','rahmah ','eman ','jana ','mohmmad '];
let knowFamily;
let m ;
for( m=0;m <6;m++)
 {
     knowFamily=prompt('Guess the name of anyone of my family member?')
     knowFamily=knowFamily.toLowerCase();
    for (let q =0 ; q < arrOfNames.length ; q++ )
    {
        if ( knowFamily===arrOfNames[q])
        {
           alert ('correct') 
           m=9;
           score =score+1;
           break ;
        }
    }
    }
    alert ( 'My family members are : '+ arrOfNames );
}
guessItemOnArray();
function yourScore ()
{
alert ('Your score is '+ score +' out of 7')
    if (score>=5)
    {
        alert ('You Know me well!');
    }
    else {
        alert ('You don\'n know me well');
    }
}
yourScore ();



let grade;
function totalGrade(score){

    grade=(score*100)/7;

    return grade;
}

totalGrade(score);


alert('Your total grade is '+ '' + grade +'%');
alert ('Welcome to you again ');









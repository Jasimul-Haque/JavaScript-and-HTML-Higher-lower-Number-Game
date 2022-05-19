let maximum, result,guess,message;
let guessList=[];
function maximumNumber(){
    let input;
    let valid_input=false;
    

    while(!valid_input){
        input= prompt("Please input a Maximum number for guessing game: ");
        maximum=Number(input);
        if(maximum!=NaN && maximum >0){
            maximum=Math.floor(maximum);
            valid_input=true;
        }

    }
  let guessInstruction=document.getElementById("guessInstruction");
  guessInstruction.innerHTML="Guess a number between 1 and "+maximum;  
  
 result=Math.floor(Math.random()*maximum)+1;
 console.log(result);
   
}


function guessNumber(){
  
    
    
    guess=Number(document.getElementById("guess").value);
     message=document.getElementById("message");
    if(isNaN={guess}){
        message.innerHTML="That is not a number";        
    }
    if (guess>maximum){
        message.innerHTML="That number is not in the range, Try again";}     
    
    if(result==guess){
        guessList.push(guess);
        message.innerHTML="You got it! it took you "+guessList.length+" tries and your guesses were "+guessList;

    } 
    if(guess<=0){
        message.innerHTML="Insert a positive number.";  
          
    }
    if(guess<result && guess>0 ){
        
       if(guessList.indexOf(guess)==-1){
        guessList.push(guess);
        message.innerHTML="No, try a higher number.";  
       }else{
        message.innerHTML="you have already guessed that number";  

       }
        
        console.log(guessList);
    }
    if(guess>result && guess<=maximum){

        if(guessList.indexOf(guess)==-1){
        guessList.push(guess);
        message.innerHTML="No, try a lower number.";  
       }else{
        message.innerHTML="you have already guessed that number";  

       }
        console.log(guessList);


    }

}
function Guessvalidation(guess){
    
    for(let i=0;i<guessList.length;i++){
        if(guess==guessList[i]){
           message.innerHTML="you have already guessed that number";
        }
        else{
            guessList.push(guess);
        }

    }
    console.log(guessList);
    
}

    

    


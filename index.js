var chalk = require('chalk')
var readline = require('readline-sync')
var score=0;
function welcome(){
var userName=readline.question(chalk.black.bgCyanBright("What's your Name? "))

console.log(chalk.red.bgYellowBright.bold
("Let's play Olympic 2021 Quiz with "+userName));
}
var questions=[
  {question:"Where do Olympics played in 2021? ",
  answer:"Tokyo"
  },
   {question:"How many medals India won? ",
  answer:"7"
  },
   {question:"who won gold medal for India? ",
  answer:"Neeraj Chopra"
  },
  {question:"who is first Indian female badminton player won 2 medals in individual category in India? ",
  answer:"PV Sindhu"
  },
  {question:"India won Gold medal in which game ",
  answer:"Javelin throw"
  }
]

function play(question,answer,questionNumber){
  //ask question to user
  var userAns = readline.question(questionNumber+"."+question);
  //check answer is right or not
  if(userAns.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("Yeah! right"));
    score += 1;
  }else{
    console.log(chalk.red("oops !, wrong answer"));
  }
  console.log(chalk.black.bgYellowBright("Current Score : ",score));
  console.log("---------------");

}
function game(){
  //iterate over questions from array
  for(var i=0;i<questions.length;i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question,currentQuestion.answer,i+1);
  }
}
function showCurrentScore() {
  console.log(chalk.black.bgGreenBright("Your score: ", score+"\nThank you for playing the quiz!"));
 
}
welcome();
game();
showCurrentScore();

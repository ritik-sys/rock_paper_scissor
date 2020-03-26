var count_computer=0;
var count_user=0
const user_score_span=document.querySelector("#user-score");
const computer_score_span=document.querySelector("#computer-score");
const score_board_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result");
const rock_div=document.querySelector("#rock");
const paper_div=document.querySelector("#paper");
const scissor_div=document.querySelector("#scissor");
function computer_choice()
{
  var choice=["rock","paper","scissor"];
  const randomchoice=Math.floor((Math.random()*3));
  return choice[randomchoice];
}

function game(userchoice)
{
  var computerchoice=computer_choice();
  if(userchoice==="rock")
  {
    if(computerchoice=="rock")
    {
        result_div.innerHTML="It is a DRAW!";
    }
    if(computerchoice==="scissor")
    {
           result_div.innerHTML="Rock Breaks Scissor . USER WINS!";
           count_user++;
           user_score_span.innerHTML=count_user;
    }
    if(computerchoice==="paper")
    {
            result_div.innerHTML="Paper Covers Rock . COMPUTER WINS!";
            count_computer++;
            computer_score_span.innerHTML=count_computer;

    }
  }
  if(userchoice==="paper")
  {
    if(computerchoice=="paper")
    {
        result_div.innerHTML="It is a DRAW!";
    }
    if(computerchoice==="scissor")
    {
             result_div.innerHTML="scissor Cuts Paper . COMPUTER WINS!";
             count_computer++;
             computer_score_span.innerHTML=count_computer;
    }
    if(computerchoice==="rock")
    {
             result_div.innerHTML="Paper Covers Rock . USER WINS!";
             count_user++;
             user_score_span.innerHTML=count_user;
    }
  }
  if(userchoice==="scissor")
  {
    if(computerchoice=="scissor")
    {
        result_div.innerHTML="It is a DRAW!";
    }
    if(computerchoice==="rock")
    {
          result_div.innerHTML="Rock Breaks Scissor . COMPUTER WINS!";
          count_computer++;
          computer_score_span.innerHTML=count_computer;
    }
    if(computerchoice==="paper")
    {
      result_div.innerHTML="Scissor Cuts Paper . USER WINS!";
      count_user++;
      user_score_span.innerHTML=count_user;
    }
  }

}
function main()
{
  rock_div.addEventListener("click",function(){
    game(this.id);
  });
  paper_div.addEventListener("click",function(){
    game(this.id);
  });

  scissor_div.addEventListener("click",function(){
    game(this.id);
  });

}
main();
